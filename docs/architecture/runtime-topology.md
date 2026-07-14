# Local service topology

Start infrastructure services in this order:

1. `config-service` — port `8888`; serves native configuration for local development.
2. `discovery-service` — port `8761`; Eureka registry.
3. Domain and intelligence services — ports `8081` through `8089`.
4. `gateway-service` — public edge on port `8080`.

All non-infrastructure services use an optional Config Server import so they can boot with their checked-in local configuration during development. In deployed environments, set `CONFIG_SERVER_URI` and `EUREKA_DEFAULT_ZONE` through platform configuration; do not compile environment URLs or credentials into artifacts.

## Service ports

| Port | Service |
| ---: | --- |
| 8080 | gateway-service |
| 8081 | auth-service |
| 8082 | patient-service |
| 8083 | bed-service |
| 8084 | department-service |
| 8085 | admission-service |
| 8086 | dashboard-service |
| 8087 | notification-service |
| 8088 | simulation-service |
| 8089 | ai-service |
| 8761 | discovery-service |
| 8888 | config-service |

## Run a service

From the repository root on Windows:

```powershell
.\backend\mvnw.cmd -f .\services\gateway-service\pom.xml spring-boot:run
```

The Maven reactor can package every deployable service in one command:

```powershell
Push-Location backend; .\mvnw.cmd verify -Pquality; Pop-Location
```
