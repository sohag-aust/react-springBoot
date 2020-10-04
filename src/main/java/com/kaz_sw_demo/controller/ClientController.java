package com.kaz_sw_demo.controller;

import com.kaz_sw_demo.controller.request.ClientCreateRequest;
import com.kaz_sw_demo.controller.request.ClientUpdateRequest;
import com.kaz_sw_demo.entity.Client;
import com.kaz_sw_demo.service.ClientService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ClientController {

    private ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping("/client")
    public Client createClient(@RequestBody ClientCreateRequest clientCreateRequest) {
        return clientService.create(clientCreateRequest);
    }

    @GetMapping("/clients")
    public List<Client> getAllClient() {
        return clientService.findAll();
    }

    @GetMapping("/client/{id}")
    public Client findClientById(@PathVariable("id") Integer id) {
        return clientService.findById(id);
    }

    @PutMapping("/client/{id}")
    public Client updateClientById(@PathVariable("id") Integer id, @RequestBody ClientUpdateRequest clientUpdateRequest) {
        return clientService.updateById(id, clientUpdateRequest);
    }

    @DeleteMapping("/client/{id}")
    public ResponseEntity<?> deleteClientById(@PathVariable("id") Integer id) {
        clientService.deleteById(id);
        return ResponseEntity.ok("Client with id: " + id + " deleted successfully !");
    }
}
