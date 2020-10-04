package com.kaz_sw_demo.controller.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ClientCreateRequest {

    @JsonProperty("client_name")
    private String clientName;

    @JsonProperty("client_email")
    private String clientEmail;

    @JsonProperty("country")
    private String country;

}
