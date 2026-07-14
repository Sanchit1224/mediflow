package com.mediflow.platform.shared.events;

import java.time.Instant;
import java.util.Map;
import java.util.UUID;

/** Versioned, immutable envelope for Kafka-published domain events. */
public record DomainEvent<T>(
    UUID eventId,
    String eventType,
    Instant occurredAt,
    UUID aggregateId,
    String aggregateType,
    int schemaVersion,
    T payload,
    Map<String, String> metadata
) {
  public DomainEvent {
    if (eventId == null || aggregateId == null || occurredAt == null) throw new IllegalArgumentException("Event identifiers and occurrence time are required.");
    if (eventType == null || eventType.isBlank() || aggregateType == null || aggregateType.isBlank()) throw new IllegalArgumentException("Event and aggregate type are required.");
    if (schemaVersion < 1) throw new IllegalArgumentException("Schema version must be positive.");
    metadata = metadata == null ? Map.of() : Map.copyOf(metadata);
  }
}
