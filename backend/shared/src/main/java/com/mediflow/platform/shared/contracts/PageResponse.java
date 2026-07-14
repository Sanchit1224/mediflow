package com.mediflow.platform.shared.contracts;

import java.util.List;

/** Stable pagination response shared by versioned REST APIs. */
public record PageResponse<T>(List<T> content, int page, int size, long totalElements, int totalPages) {
  public PageResponse {
    content = List.copyOf(content);
  }
}
