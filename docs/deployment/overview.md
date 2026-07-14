# Deployment overview

MediFlow will support local Docker Compose, Kubernetes with Kustomize overlays, and a Helm release. Production services should run with non-root containers, resource requests and limits, readiness/liveness probes, network policies, managed PostgreSQL, managed Redis, and managed Kafka.

Delivery artifacts will be added as their associated implementation steps are completed.
