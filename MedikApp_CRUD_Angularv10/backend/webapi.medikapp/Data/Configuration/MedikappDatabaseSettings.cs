using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.medikapp.Data.Configuration
{
    public class MedikappDatabaseSettings : IMedikappDatabaseSettings
    {
        public string PacienteCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IMedikappDatabaseSettings
    {
        string PacienteCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
