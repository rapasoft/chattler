package no.itera.girlsday

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class ChattlerApplication

fun main(args: Array<String>) {
    SpringApplication.run(ChattlerApplication::class.java, *args)
}
