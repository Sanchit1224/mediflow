# Architecture decisions

## ADR-001: Monorepo with independent deployment units

MediFlow uses one repository for coordinated product delivery while each directory under `services/` remains a separately built, versioned, and deployable Spring Boot application. This preserves team velocity without creating a distributed monolith.

## ADR-002: Database-per-service ownership

Production deployments use a PostgreSQL database or schema per service with separate credentials. Cross-service joins are prohibited; read models are built through events.

## ADR-003: AI provider port

The AI service exposes stable APIs and application ports. Its first implementation is deterministic/mock; a Python FastAPI or Spring AI adapter can later replace it without changing frontend or domain-service contracts.

## ADR-004: Secure configuration

No secrets live in source control. Local templates document required variables; runtime secrets are injected from a secret manager or workload identity.
