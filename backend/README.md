# MediFlow backend platform

The Maven reactor owns cross-service build conventions and two deliberately narrow modules:

- `common`: technical HTTP primitives such as error contracts and request correlation.
- `shared`: stable, versioned API and event contracts only.

Domain entities, repositories, service use cases, and database migrations must remain in the service that owns that domain. Do not add shared JPA entities or cross-service repositories here.

## Quality commands

The repository includes a Maven Wrapper pinned to Maven 3.9.9. From the `backend` directory, run:

```powershell
.\mvnw.cmd verify -Pquality
```

Services added in Step 4 will use the same Java 21, dependency-convergence, test, and coverage conventions.
