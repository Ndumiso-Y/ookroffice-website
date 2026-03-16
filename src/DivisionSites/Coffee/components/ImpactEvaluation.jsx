import React from 'react'
import { BarChart, Target, TrendingUp, Users, Award, CheckCircle } from 'lucide-react'

export default function ImpactEvaluation() {
  const impactMetrics = [
    {
      title: "Programme Completion Rate",
      value: "95%",
      description: "Participants who complete the full 12-month journey",
      icon: CheckCircle,
      gradient: "from-coffeeOrange to-warmCoffee"
    },
    {
      title: "Post-Programme Impact",
      value: "87%",
      description: "Participants who launch or scale their initiatives",
      icon: TrendingUp,
      gradient: "from-warmCoffee to-deepCoffee"
    },
    {
      title: "Network Growth",
      value: "250+",
      description: "Average new connections per participant",
      icon: Users,
      gradient: "from-deepCoffee to-charcoal"
    },
    {
      title: "Funding Success",
      value: "73%",
      description: "Participants who secure funding or partnerships",
      icon: Award,
      gradient: "from-charcoal to-coffeeOrange"
    }
  ]

  const evaluationMethods = [
    {
      title: "Quarterly Assessments",
      description: "Regular progress reviews and milestone tracking",
      icon: Target
    },
    {
      title: "Impact Measurement",
      description: "Quantitative and qualitative impact evaluation",
      icon: BarChart
    },
    {
      title: "Peer Feedback",
      description: "360-degree feedback from cohort members",
      icon: Users
    },
    {
      title: "Long-term Tracking",
      description: "12-month post-programme impact monitoring",
      icon: TrendingUp
    }
  ]

  return (
    <section id="impact" className="reveal py-20 bg-gradient-to-br from-charcoal via-deepCoffee to-warmCoffee relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-coffeeOrange/30 blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-cream/20 blur-xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-warmCoffee/20 blur-lg animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Impact & Evaluation
          </h2>
          <div className="w-24 h-1 bg-orange-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Measuring success through comprehensive evaluation and demonstrated impact
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactMetrics.map((metric, index) => (
            <div key={metric.title} className="group relative" style={{animationDelay: `${index * 150}ms`}}>
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${metric.gradient} rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>

              {/* Main card */}
              <div className="relative rounded-3xl p-8 backdrop-blur-lg bg-white/10 border border-white/20 shadow-glass group-hover:shadow-strong group-hover:-translate-y-3 transition-all duration-300 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${metric.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className="text-4xl font-black text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                  {metric.value}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {metric.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {metric.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-orange-400/40 group-hover:bg-orange-400/70 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Evaluation Methods */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Evaluation Framework</h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Our comprehensive approach to measuring and enhancing participant success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {evaluationMethods.map((method, index) => (
              <div key={method.title} className="group text-center" style={{animationDelay: `${index * 200}ms`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-coffeeOrange to-warmCoffee rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                  {method.title}
                </h4>
                <p className="text-white/70 leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-coffeeOrange to-warmCoffee rounded-full flex items-center justify-center">
              <BarChart className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-white">Ready to create measurable impact?</p>
              <p className="text-white/70">Join our evidence-based programme</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}