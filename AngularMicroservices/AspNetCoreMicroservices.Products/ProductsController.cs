using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreMicroservices.Products
{
	[Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    [ApiController]
	public class ProductsController : ControllerBase
	{
		public ProductsController()
		{
			Products = new List<Product>();

			for (var i = 1; i <= 100; i++)
			{
				Products.Add(new Product { Id = i, Description = $"Product {i}" });
			}
		}

		public IList<Product> Products { get; set; }

		[HttpGet]
		public IList<Product> Get()
		{
			return Products;
		}

		[HttpGet("{id:int}")]
		public Product Get(int id)
		{
			return Products.SingleOrDefault(x => x.Id == id);
		}
	}
}
