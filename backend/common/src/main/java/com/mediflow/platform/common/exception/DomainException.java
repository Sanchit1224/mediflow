package com.mediflow.platform.common.exception;

import org.springframework.http.HttpStatus;

/** Base exception for expected, client-safe domain failures. */
public class DomainException extends RuntimeException {
  private final HttpStatus status;
  private final String code;

  public DomainException(HttpStatus status, String code, String message) {
    super(message);
    this.status = status;
    this.code = code;
  }

  public HttpStatus status() { return status; }
  public String code() { return code; }
}
