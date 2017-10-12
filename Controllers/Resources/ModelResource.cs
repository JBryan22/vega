using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace vega.Controllers.Resources
{
    public class ModelResource
    {
        public int id { get; set; }
        public string Name { get; set; }

    }
}