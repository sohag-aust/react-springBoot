package com.kaz_sw_demo;

import com.kaz_sw_demo.entity.Client;
import com.kaz_sw_demo.repository.ClientRepository;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ClientTest {

    @Autowired
    private ClientRepository clientRepository;

    @Test
    public void test_createClient() {
        Client client = new Client();
        client.setClientName("Mr.B");
        client.setClientEmail("b@gmail.com");
        client.setCountry("China");

        Client savedClient = clientRepository.save(client);
        assertNotNull(savedClient);
    }

    @Test
    public void test_findClientByName_Exits() {
        String name = "Mr.B";
        Client client = clientRepository.findByClientName(name);
        assertEquals(name, client.getClientName());
    }

    @Test
    public void test_findClientByName_NotExits() {
        String name = "Mr.C";
        Client client = clientRepository.findByClientName(name);
        assertNull(client);
    }

    @Test
    public void test_updateClient() {
        String updateClientName = "Mr.Covid";
        String updateClientEmail = "covid@gmail.com";
        String updateClientCountryName = "Bangladesh";

        Client client = clientRepository.findById(2).orElse(null);

        assert client != null;
        client.setClientName(updateClientName);
        client.setClientEmail(updateClientEmail);
        client.setCountry(updateClientCountryName);

        clientRepository.save(client);

        Client updatedClient = clientRepository.findByClientName(updateClientName);

        assertEquals(updateClientName, updatedClient.getClientName());
    }

    @Test
    public void test_listOfClients_pass() {

        List<Client> clients = clientRepository.findAll();
        assertEquals(2, clients.size());
    }

    @Test
    public void test_listOfClients_failure() {

        List<Client> clients = clientRepository.findAll();
        assertNotEquals(5, clients.size());
    }

    @Test
    @Rollback(false) // for this rollback client successfully deleted from DB.
    public void test_deleteClient() {

        boolean clientPresentBeforeDelete = clientRepository.findById(2).isPresent();

        clientRepository.deleteById(2);

        boolean clientPresentAfterDelete = clientRepository.findById(2).isPresent();

        assertTrue(clientPresentBeforeDelete);
        assertFalse(clientPresentAfterDelete);
    }

}
