using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace webapi.medikapp.Entities
{
    //[BsonIgnoreExtraElements]
    public class Paciente
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }
        public string id_doctor { get; set; }
        public string nombre { get; set; }
        public string telefono { get; set; }
        public string direccion { get; set; }

    }
}
