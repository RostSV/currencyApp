package com.example.currencyExchange.exchangeRates;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExchangeRateService {

    private final ExchangeRatesRepository exchangeRatesRepository;

    @Autowired

    public ExchangeRateService(ExchangeRatesRepository exchangeRatesRepository) {
        this.exchangeRatesRepository = exchangeRatesRepository;
    }


    public List<ExchangeRate> getAllExchangeRates(){
        return exchangeRatesRepository.findAll();
    }


    public void addNewRate(ExchangeRate exchangeRate) {
        exchangeRatesRepository.save(exchangeRate);
    }

    public ExchangeRate updateCurrency(ExchangeRate ExchangeRate, int id) {
        return exchangeRatesRepository.findById(id)
                .map(exchangeRate -> {
                    exchangeRate.setRate(ExchangeRate.getRate());
                    exchangeRate.setBaseCurrency(ExchangeRate.getBaseCurrency());
                    exchangeRate.setTargetCurrency(ExchangeRate.getTargetCurrency());
                    return exchangeRatesRepository.save(exchangeRate);
                }).orElseThrow(() -> new RuntimeException());
    }

    public void removeRate(int id) {
        exchangeRatesRepository.deleteById(id);
    }
}
