package com.kaz_sw_demo.controller;

import com.kaz_sw_demo.controller.request.LoginRequest;
import com.kaz_sw_demo.controller.request.LoginResponse;
import com.kaz_sw_demo.security.JwtTokenProvider;
import com.kaz_sw_demo.security.UserDetailsServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    private AuthenticationManager authenticationManager;
    private UserDetailsServiceImpl userDetailsService;
    private JwtTokenProvider jwtTokenUtil;

    public UserController(AuthenticationManager authenticationManager,
                          UserDetailsServiceImpl userDetailsService,
                          JwtTokenProvider jwtTokenUtil
    ) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) throws Exception{

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );
        }catch(BadCredentialsException e) {
            throw new Exception("Incorrect Username or password" , e);
        }

        String jwt = jwtTokenUtil.generateToken(loginRequest.getEmail());
        return ResponseEntity.ok(new LoginResponse(jwt));
    }

    @GetMapping("/home")
    public String home() {
        return "Home-Page || testing purpose";
    }
}
