package com.amitesh.portfolio.a11ycommandcenter.domain;

import java.time.Instant;
import java.util.UUID;

public record PortfolioRecord(UUID id, String title, String status, String note, Instant updatedAt) {}
