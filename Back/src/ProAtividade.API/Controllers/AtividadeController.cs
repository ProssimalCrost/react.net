using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace ProAtividadeNovo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AtividadeController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return new List<Atividade>()
            {
                new Atividade(1),
                new Atividade(2),
                new Atividade(3)
            };
        }

        [HttpPost]
        public IActionResult Post([FromBody] Atividade atividade)
        {
            return Ok("Recebi atividade");
        }

        [HttpPut]
        public IActionResult Put([FromBody] Atividade atividade)
        {
            return Ok("Recebi atividade");
        }
    }
};
    // Modelo simples de Atividade
    
