using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KoloNaukowe.Models
{
    public partial class TblGroups
    {
        public int GroupId { get; set; }
        public string GroupName { get; set; }
    }
}
