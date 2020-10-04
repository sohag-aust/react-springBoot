package com.kaz_sw_demo.service;

import com.kaz_sw_demo.controller.request.ClientCreateRequest;
import com.kaz_sw_demo.controller.request.ClientUpdateRequest;
import com.kaz_sw_demo.entity.Client;

import java.util.List;

public interface ClientService {

    Client create(ClientCreateRequest clientCreateRequest);
    Client findById(Integer id);
    List<Client> findAll();
    void deleteById(Integer id);
    Client updateById(Integer id, ClientUpdateRequest clientUpdateRequest);
}
