package com.mediflow.platform.common.observability;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.UUID;
import org.slf4j.MDC;
import org.springframework.http.HttpHeaders;
import org.springframework.web.filter.OncePerRequestFilter;

/** Propagates a safe request correlation ID through HTTP and log MDC. */
public class RequestIdFilter extends OncePerRequestFilter {
  public static final String HEADER = "X-Request-Id";
  private static final int MAX_REQUEST_ID_LENGTH = 128;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {
    String requestId = request.getHeader(HEADER);
    if (requestId == null || requestId.isBlank() || requestId.length() > MAX_REQUEST_ID_LENGTH) {
      requestId = UUID.randomUUID().toString();
    }
    try (MDC.MDCCloseable ignored = MDC.putCloseable("requestId", requestId)) {
      response.setHeader(HEADER, requestId);
      filterChain.doFilter(request, response);
    }
  }
}
