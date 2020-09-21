using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using webapi.medikapp.Data.Configuration;
using webapi.medikapp.Entities;

namespace webapi.medikapp.Data
{
    public class PacienteDb
    {
        private readonly IMongoCollection<Paciente> _pacienteCollection;

        public PacienteDb(IMedikappDatabaseSettings settings)
        {
            //connect with MongoDB - Medikapp
            var mdbClient = new MongoClient(settings.ConnectionString);

            var database = mdbClient.GetDatabase(settings.DatabaseName);

            _pacienteCollection = database.GetCollection<Paciente>(settings.PacienteCollectionName);
        }

        public List<Paciente> Get()
        {
            return _pacienteCollection.Find(cli => true).ToList();
        }

        public Paciente GetById(string id)
        {
            return _pacienteCollection.Find<Paciente>(paciente => paciente.id == id).FirstOrDefault();
        }

        public Paciente Create(Paciente cli)
        {
            _pacienteCollection.InsertOne(cli);
            return cli;
        }

        public void Update(string id, Paciente cli)
        {
            _pacienteCollection.ReplaceOne(paciente => paciente.id == id, cli);
        }

        public void Delete(Paciente cli)
        {
            _pacienteCollection.DeleteOne(paciente => paciente.id == cli.id);
        }

        public void DeleteById(string id)
        {
            _pacienteCollection.DeleteOne(paciente => paciente.id == id);
        }
    }
}
