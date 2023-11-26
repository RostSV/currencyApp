package com.example.currencyExchange.currency;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "currency")
public class Currency {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @NotEmpty
    @Pattern(regexp = "^[a-zA-Z]+$")
    private String name;

    @NotNull
    @NotEmpty
    @Pattern(regexp = "^[a-zA-Z]+$")
    private String code;

    @NotNull
    @NotEmpty
    @Size(max = 1)
    private String sign;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }
}
