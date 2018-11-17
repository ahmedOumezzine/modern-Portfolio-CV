using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Portfolio_Cv.Startup))]
namespace Portfolio_Cv
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
