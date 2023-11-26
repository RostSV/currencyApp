package com.example.currencyExchange.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler {
    @ExceptionHandler({InvalidInputException.class})
    public ResponseEntity<Object> handleStudentNotFoundException(InvalidInputException exception) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("message");
    }
}
