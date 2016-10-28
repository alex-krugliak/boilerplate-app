package com.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created on 27.10.16.
 */
@Controller
public class BaseController {

    @RequestMapping({"/", "/home"})
    public String indexPage() {
        return "index.html";
    }
}
