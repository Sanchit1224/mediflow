package com.mediflow.platform.common.exception;

import com.mediflow.platform.common.api.ApiError;
import jakarta.servlet.http.HttpServletRequest;
import java.time.Instant;
import java.util.List;
import org.slf4j.MDC;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
  @ExceptionHandler(DomainException.class)
  ResponseEntity<ApiError> handleDomain(DomainException exception, HttpServletRequest request) {
    return response(exception.status(), exception.code(), exception.getMessage(), request, List.of());
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  ResponseEntity<ApiError> handleValidation(MethodArgumentNotValidException exception, HttpServletRequest request) {
    var violations = exception.getBindingResult().getFieldErrors().stream()
        .map(this::toViolation).toList();
    return response(HttpStatus.BAD_REQUEST, "VALIDATION_FAILED", "One or more fields are invalid.", request, violations);
  }

  @ExceptionHandler(Exception.class)
  ResponseEntity<ApiError> handleUnexpected(Exception exception, HttpServletRequest request) {
    return response(HttpStatus.INTERNAL_SERVER_ERROR, "INTERNAL_ERROR", "An unexpected error occurred.", request, List.of());
  }

  private ApiError.FieldViolation toViolation(FieldError error) {
    return new ApiError.FieldViolation(error.getField(), error.getDefaultMessage());
  }

  private ResponseEntity<ApiError> response(HttpStatus status, String code, String message, HttpServletRequest request, List<ApiError.FieldViolation> violations) {
    var body = new ApiError(Instant.now(), status.value(), code, message, request.getRequestURI(), MDC.get("requestId"), violations);
    return ResponseEntity.status(status).body(body);
  }
}
