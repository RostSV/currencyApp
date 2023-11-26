package com.example.currencyExchange.exchangeRates;

import com.example.currencyExchange.currency.Currency;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping
public class ExchangeRateController {

    private final ExchangeRateService exchangeRateService;

    @Autowired
    public ExchangeRateController(ExchangeRateService exchangeRateService) {
        this.exchangeRateService = exchangeRateService;
    }

    @GetMapping("/rates/show")
    public List<ExchangeRate> getAllExchangeRates(){
        return exchangeRateService.getAllExchangeRates();
    }

    @PostMapping("/rates/add")
    public void addNewRate(@RequestBody ExchangeRate exchangeRate){
        exchangeRateService.addNewRate(exchangeRate);
    }

    @PutMapping("/rates/update/{id}")
    ExchangeRate updateRate(@RequestBody ExchangeRate ExchangeRate, @PathVariable int id){
        return exchangeRateService.updateCurrency(ExchangeRate, id);

    }

    @DeleteMapping("/rates/delete/{id}")
    public void removeRate(@PathVariable("id") int id){
        exchangeRateService.removeRate(id);
    }

}
