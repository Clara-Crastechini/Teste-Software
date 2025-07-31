﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reservas.Api.Models;


namespace Reservas.Testes.MockData
{
    public class ReservasMockData
    {
        public static List<Reserva> GetReservas()
        {
            return new List<Reserva>()
            {
                new Reserva {ReservaId = 1, Nome="Clara", InicioLocacao = "São Paulo", FimLocacao="Campinas"},
                new Reserva {ReservaId = 2, Nome="Samanta", InicioLocacao = "São Paulo", FimLocacao="Osasco"},
                new Reserva {ReservaId = 3, Nome="Marcos", InicioLocacao = "São Paulo", FimLocacao="São Bernando"},
            }; 
        }
    }
}
