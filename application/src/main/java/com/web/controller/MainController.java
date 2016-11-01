package com.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * Created on 27.10.16.
 */
@Controller
public class MainController extends BaseController {

    @RequestMapping({"/", "/home"})
    public String indexPage() {
        return "index.html";
    }

    @RequestMapping("/api/test")
    @ResponseBody
    public Map<String, String> testConnection() {

        Map<String, String> response = new HashMap<>();
        response.put("status", "connection ok");

        return response;
    }
}
