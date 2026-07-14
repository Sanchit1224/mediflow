package com.mediflow.platform.common.api;

import java.time.Instant;
import java.util.List;

/** Stable RFC 7807-inspired error representation exposed by all MediFlow APIs. */
public record ApiError(
    Instant timestamp,
    int status,
    String code,
    String message,
    String path,
    String requestId,
    List<FieldViolation> violations
) {
  public record FieldViolation(String field, String message) { }
}
