package com.kaz_sw_demo.repository;

import com.kaz_sw_demo.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

    public Client findByClientName(String name);
}
