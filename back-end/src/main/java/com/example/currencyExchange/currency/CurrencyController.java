package com.example.currencyExchange.currency;
import com.example.currencyExchange.exception.InvalidInputException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
public class CurrencyController {

    private final CurrencyService currencyService;

    @Autowired
    public CurrencyController(CurrencyService currencyService){
        this.currencyService = currencyService;
    }

    @GetMapping("/")
    public List<Currency> getCurrencies(){
        return currencyService.getCurrencies();
    }

    @GetMapping("/currencies/{id}")
    Currency getCurrencyById(@PathVariable int id){
        return currencyService.findCurrencyById(id);
    }

    //update
    @PutMapping("/currencies/editCurrency/{id}")
    Currency updateCurrency(@RequestBody @Valid Currency newCurrency, @PathVariable int id, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            throw new InvalidInputException("Invalid value");
        }

        return currencyService.updateCurrency(newCurrency, id);
   }

    //remove

    @DeleteMapping(path = "/currencies/delete/{id}")
    public void removeCurrency(@PathVariable("id") int id){
        currencyService.removeCurrency(id);
    }

//    @GetMapping("{code}")
//    public Currency getCurrencyByCode(@PathVariable("code") String code){
//        return currencyService.findCurrencyByCode(code);
//    }

    //save
    @PostMapping("/currencies/save")
    public Currency addNewCurrency(@RequestBody @Valid Currency currency, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            throw new InvalidInputException("Invalid input");
        }else{
            return currencyService.addCurrency(currency);

        }
    }





}
