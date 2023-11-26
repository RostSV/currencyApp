package com.example.currencyExchange.currency;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CurrencyRepository
        extends JpaRepository<Currency,Integer> {

    Currency findCurrencyByCode(String code);
    List<Currency> findAllByOrderById();

}
