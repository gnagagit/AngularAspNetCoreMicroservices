using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreMicroservices.Customers
{
	[Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    [ApiController]
	public class CustomersController : ControllerBase
	{
		public CustomersController()
		{
			Customers = new List<Customer>();

			for (var i = 1; i <= 100; i++)
			{
				Customers.Add(new Customer { Id = i, Name = $"Customer {i}" });
			}
		}

		public IList<Customer> Customers { get; set; }

		[HttpGet]
		public IList<Customer> Get()
		{
			return Customers;
		}

		[HttpGet("{id:int}")]
		public Customer Get(int id)
		{
			return Customers.SingleOrDefault(x => x.Id == id);
		}
	}
}
