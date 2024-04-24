package com.cursos.microservicecursos.exception;

import java.time.LocalDateTime;

public class ErrorDetails {
    private LocalDateTime timeStampDateTime;
    private String message;
    private String path;
    private String errorCode;

    public ErrorDetails() {
    }

    public ErrorDetails(LocalDateTime timeStampDateTime, String message, String path, String errorCode) {
        this.timeStampDateTime = timeStampDateTime;
        this.message = message;
        this.path = path;
        this.errorCode = errorCode;
    }

    public LocalDateTime getTimeStampDateTime() {
        return timeStampDateTime;
    }

    public void setTimeStampDateTime(LocalDateTime timeStampDateTime) {
        this.timeStampDateTime = timeStampDateTime;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }
}
