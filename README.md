# MediFlow

MediFlow is an AI-powered Hospital Operations Intelligence Platform. It gives hospital operations teams a real-time command center, predictive cascade-risk intelligence, intervention simulations, and AI-assisted shift handovers.

> MediFlow is an operational decision intelligence product, not an electronic health record or hospital management system.

## Architecture

The platform is structured as independently deployable, event-driven Spring microservices behind an API gateway. Each domain service owns its persistence model and exposes versioned APIs; Kafka carries domain events; Redis supports caching and ephemeral state; PostgreSQL is the system of record.

```text
React / TypeScript SPA
        |
   API Gateway ───────── WebSocket updates
        |
  +-----+------+-------------------------------+
  |            |                               |
Auth      Operational domain services       Intelligence services
  |       (patient, bed, admission,          (dashboard, simulation, AI,
  |        department, notification)          notification)
  |            |                               |
  +--------- Kafka event backbone ------------+
               |                 |
          PostgreSQL          Redis
```

## Repository layout

```text
frontend/       React + TypeScript application
backend/        Cross-service Java modules and local backend configuration
services/       Independently deployable Spring Boot services
docs/           Architecture, API, and deployment documentation
docker/         Container and local-stack assets
k8s/            Kustomize base and environment overlays
helm/            Helm chart for cluster installation
scripts/         Developer and delivery automation
```

See [service boundaries](docs/architecture/service-boundaries.md) for ownership and integration rules. Runnable service implementations arrive in the following delivery steps.

## Configuration and security

Copy the environment templates before running local services:

```powershell
Copy-Item frontend/.env.example frontend/.env
Copy-Item backend/.env.example backend/.env
```

Do not commit `.env` files, credentials, private keys, or cloud service-account files. Production values must be injected through the deployment platform or a managed secret store.
