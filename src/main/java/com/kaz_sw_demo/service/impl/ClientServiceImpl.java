package com.kaz_sw_demo.service.impl;

import com.kaz_sw_demo.controller.request.ClientCreateRequest;
import com.kaz_sw_demo.controller.request.ClientUpdateRequest;
import com.kaz_sw_demo.entity.Client;
import com.kaz_sw_demo.repository.ClientRepository;
import com.kaz_sw_demo.service.ClientService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {

    private ClientRepository clientRepository;

    public ClientServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public Client create(ClientCreateRequest clientCreateRequest) {

        Client client = new Client();

        client.setClientName(clientCreateRequest.getClientName());
        client.setClientEmail(clientCreateRequest.getClientEmail());
        client.setCountry(clientCreateRequest.getCountry());

        return clientRepository.save(client);
    }

    @Override
    public Client findById(Integer id) {
        return clientRepository.findById(id).orElse(null);
    }

    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    @Override
    public void deleteById(Integer id) {
        clientRepository.deleteById(id);
    }

    @Override
    public Client updateById(Integer id, ClientUpdateRequest clientUpdateRequest) {

        Client clientToBeUpdated = findById(id);

        clientToBeUpdated.setClientName(clientUpdateRequest.getClientName());
        clientToBeUpdated.setClientEmail(clientUpdateRequest.getClientEmail());
        clientToBeUpdated.setCountry(clientUpdateRequest.getCountry());

        return clientRepository.save(clientToBeUpdated);
    }
}
