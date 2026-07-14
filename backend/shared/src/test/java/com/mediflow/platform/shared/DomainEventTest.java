package com.mediflow.platform.shared;

import static org.assertj.core.api.Assertions.assertThatThrownBy;

import com.mediflow.platform.shared.events.DomainEvent;
import java.time.Instant;
import java.util.UUID;
import org.junit.jupiter.api.Test;

class DomainEventTest {
  @Test
  void rejectsAnInvalidSchemaVersion() {
    assertThatThrownBy(() -> new DomainEvent<>(UUID.randomUUID(), "bed.status.changed", Instant.now(), UUID.randomUUID(), "Bed", 0, "payload", null))
        .isInstanceOf(IllegalArgumentException.class);
  }
}
