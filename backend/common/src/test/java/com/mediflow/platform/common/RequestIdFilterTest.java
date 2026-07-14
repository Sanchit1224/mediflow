package com.mediflow.platform.common;

import static org.assertj.core.api.Assertions.assertThat;

import com.mediflow.platform.common.observability.RequestIdFilter;
import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;

class RequestIdFilterTest {
  @Test
  void generatesAndReturnsRequestIdWhenHeaderIsAbsent() throws Exception {
    var request = new MockHttpServletRequest();
    var response = new MockHttpServletResponse();

    new RequestIdFilter().doFilter(request, response, (req, res) -> { });

    assertThat(response.getHeader(RequestIdFilter.HEADER)).isNotBlank();
  }
}
