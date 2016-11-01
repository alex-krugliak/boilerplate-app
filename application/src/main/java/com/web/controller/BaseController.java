package com.web.controller;


import com.web.wrapper.response.ResponseError;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Arrays;

/**
 * Created on 01.11.16.
 */
@Controller
public class BaseController {

    @ExceptionHandler(Exception.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public ResponseError handleException(Exception ex) {
        ResponseError error = new ResponseError();
        error.setMessage("some error");
        error.setStackTrace(Arrays.toString(ex.getStackTrace()));
        return error;
    }


}
