package com.example.currencyExchange.currency;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class CurrencyService {
    private final CurrencyRepository currencyRepository;

    @Autowired
    public CurrencyService(CurrencyRepository currencyRepository) {
        this.currencyRepository = currencyRepository;
    }

    public Currency addCurrency(Currency currency){
        return currencyRepository.save(currency);
    }


    public List<Currency> getCurrencies() {
        return currencyRepository.findAllByOrderById();
    }

    public void removeCurrency(int id) {
        currencyRepository.deleteById(id);

    }

    public Currency findCurrencyById(int id){
        return currencyRepository.findById(id)
                .orElseThrow(RuntimeException::new);
    }

    public Currency updateCurrency(Currency newCurrency, int id){
        return currencyRepository.findById(id)
                .map(currency -> {
                    currency.setName(newCurrency.getName());
                    currency.setCode(newCurrency.getCode());
                    currency.setSign(newCurrency.getSign());
                    return currencyRepository.save(currency);
                }).orElseThrow(RuntimeException::new);


    }



}
