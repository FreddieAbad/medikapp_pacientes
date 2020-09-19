using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.medikapp.Data;
using webapi.medikapp.Entities;

namespace webapi.medikapp.Controllers
{
    [Route("api/paciente")]
    [ApiController]
    public class PacienteController : ControllerBase
    {
        private readonly PacienteDb _pacienteDb;

        public PacienteController(PacienteDb pacienteDb)
        {
            _pacienteDb = pacienteDb;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_pacienteDb.Get());
        }

        [HttpGet("{id:length(24)}", Name = "GetCliente")]
        public IActionResult GetById(string id)
        {
            var paciente = _pacienteDb.GetById(id);

            if (paciente == null)
            {
                return NotFound();
            }

            return Ok(paciente);
        }

        [HttpPost]
        public IActionResult Create(Paciente paciente)
        {
            _pacienteDb.Create(paciente);

            return CreatedAtRoute("GetPaciente", new
            {
                id = paciente.id.ToString()
            }, paciente);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Paciente cli)
        {
            var cliente = _pacienteDb.GetById(id);

            if (cliente == null)
            {
                return NotFound();
            }

            _pacienteDb.Update(id, cli);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult DeleteById(string id)
        {
            var paciente = _pacienteDb.GetById(id);

            if (paciente == null)
            {
                return NotFound();
            }

            _pacienteDb.DeleteById(paciente.id);

            return NoContent();
        }
    }
}
