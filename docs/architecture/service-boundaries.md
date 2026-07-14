# MediFlow service boundaries

## Domain ownership

| Service | Responsibility | Primary data it owns |
| --- | --- | --- |
| gateway-service | Edge routing, token propagation, rate limiting, WebSocket entry point | None |
| config-service | Centralized, versioned service configuration | Configuration repository only |
| discovery-service | Service registration and discovery | Registry metadata only |
| auth-service | Identity, roles, sessions, refresh-token lifecycle | Users, roles, refresh tokens, audit security events |
| patient-service | Patient operational profile and identifiers | Patients |
| bed-service | Bed inventory, availability, and utilization | Beds, bed status history |
| department-service | Department configuration, staffing capacity, health inputs | Departments, capacity rules |
| admission-service | Admission, transfer, discharge operational flow | Admissions, transfers, discharges |
| dashboard-service | Read-optimized command-center projections | Dashboard projections only |
| notification-service | In-app, email, and escalation notifications | Notifications, delivery attempts |
| simulation-service | What-if intervention modeling and scenario runs | Simulations, scenario results |
| ai-service | Replaceable prediction-provider adapter and mock models | Predictions, model metadata |

## Integration rules

1. A service owns its data and is the only service allowed to write to its database/schema.
2. Cross-domain state changes are published as immutable Kafka domain events using an outbox pattern.
3. Synchronous OpenFeign calls are reserved for bounded, request-time queries; consumers must use timeouts, circuit breakers, and fallbacks.
4. Dashboard projections, notifications, simulations, and AI predictions consume events and remain eventually consistent.
5. API contracts are versioned under `/api/v1`; event contracts are versioned by topic payload schema.
6. No service shares JPA entities, repositories, or database tables with another service. Shared modules contain only stable technical primitives and contracts.

## Event flow examples

```text
admission-service --AdmissionCreated--> Kafka --> bed-service
                                              --> dashboard-service
                                              --> ai-service

bed-service --BedStatusChanged--> Kafka -----> dashboard-service
                                              --> simulation-service
                                              --> notification-service
```

## Package convention per service

```text
src/main/java/com/mediflow/<service>/
  api/             REST controllers and request/response DTOs
  application/     use cases and transactional orchestration
  domain/          aggregates, value objects, domain services, events
  infrastructure/  JPA, messaging, HTTP clients, configuration
```

The dependency direction is `api -> application -> domain`; infrastructure implements domain/application ports and must not become the source of business rules.
