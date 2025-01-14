'use client';

import React, { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { ArrowUpRight, Calendar, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const DrugCard = ({ drug }) => {
  const getSuccessProbabilityColor = (probability) => {
    if (probability >= 90) return 'bg-green-600';
    if (probability >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card className="relative min-w-[400px] overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white rounded-xl border border-gray-200">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 p-8 text-white">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold tracking-tight">{drug.name}</h3>
          <p className="text-base text-indigo-100 font-medium">{drug.company}</p>
        </div>
      </div>

      <div className="p-8 space-y-8 bg-gradient-to-b from-white to-gray-50">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="flex items-center text-gray-700 mb-2">
              <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
              <span className="text-sm font-semibold">Expected Launch</span>
            </div>
            <p className="font-bold text-lg text-gray-900 ml-7">{drug.launch}</p>
          </div>
          <div>
            <div className="flex items-center text-gray-700 mb-2">
              <DollarSign className="w-5 h-5 mr-2 text-indigo-600" />
              <span className="text-sm font-semibold">2030 Sales</span>
            </div>
            <p className="font-bold text-lg text-gray-900 ml-7">${drug.sales}B</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">Indication</h4>
            <p className="text-base text-gray-700 leading-relaxed">{drug.indication}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">Mechanism of Action</h4>
            <p className="text-base text-gray-700 leading-relaxed">{drug.moa}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-lg text-gray-900">Success Probability</h4>
          {drug.probabilities.map((prob, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-base text-gray-700 font-medium">{prob.context}</span>
                <span className="font-bold text-gray-900">{prob.value}%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${getSuccessProbabilityColor(prob.value)}`}
                  style={{ width: `${prob.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-lg text-gray-900">Key Features</h4>
          <ul className="space-y-3">
            {drug.features.map((feature, index) => (
              <li key={index} className="flex items-start group">
                <ArrowUpRight className="w-5 h-5 mr-2 mt-0.5 text-indigo-600 transform group-hover:translate-x-1 transition-transform" />
                <span className="text-base text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

const DrugCards = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 450;
    const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };
  
  const drugs = [
        {
          name: "AWIQLI",
          company: "Novo Nordisk",
          launch: "2024-2025",
          sales: 4.70,
          indication: "Type 1 and Type 2 Diabetes Mellitus",
          moa: "Long-acting basal insulin analog",
          probabilities: [
            {
              value: 95,
              context: "United States"
            }
          ],
          features: [
            "First once-weekly insulin",
            "Mobile app for dose optimization",
            "Similar hypoglycemia rates to daily insulin"
          ]
        },
        {
          name: "CagriSema",
          company: "Novo Nordisk",
          launch: "2026-2027",
          sales: 8.30,
          indication: "Obesity and Type 2 Diabetes",
          moa: "GLP-1 RA + long-acting amylin analog",
          probabilities: [
            {
              value: 71,
              context: "European Union"
            }
          ],
          features: [
            "First FDC amylin and GLP-1 RA",
            "Superior weight loss vs. existing options",
            "Potential cardiovascular benefits"
          ]
        },
        {
          name: "COBENFY",
          company: "Bristol Myers Squibb",
          launch: "2024",
          sales: 1.60,
          indication: "Schizophrenia",
          moa: "Dual M1/M4 muscarinic receptor agonist",
          probabilities: [
            {
              value: 21,
              context: "European Union"
            }
          ],
          features: [
            "First novel MOA in 30+ years",
            "Improved tolerability profile",
            "Potential for earlier line use"
          ]
        },
        {
          name: "EBGLYSS",
          company: "Eli Lilly & Co",
          launch: "2024",
          sales: 6.00,
          indication: "Atopic Dermatitis",
          moa: "IL-13-targeting monoclonal antibody",
          probabilities: [
            {
              value: 56,
              context: "Mainland China"
            }
          ],
          features: [
            "Less frequent dosing than competitors",
            "Strong efficacy profile",
            "Favorable safety data"
          ]
        },
        {
          name: "Fitusiran",
          company: "Alnylam/Sanofi",
          launch: "2025",
          sales: 1.00,
          indication: "Hemophilia A and B",
          moa: "Antithrombin-targeting siRNA",
          probabilities: [
            {
              value: 95,
              context: "United States"
            }
          ],
          features: [
            "Monthly/bimonthly dosing",
            "Effective regardless of inhibitor status",
            "Reduced treatment burden"
          ]
        },
        {
          name: "GSK-3536819",
          company: "GSK",
          launch: "2025",
          sales: 0.91,
          indication: "Meningococcal Disease",
          moa: "Pentavalent vaccine targeting N. meningitidis",
          probabilities: [
            {
              value: 90,
              context: "European Union"
            }
          ],
          features: [
            "5-in-1 vaccine targeting major strains",
            "Reduced number of injections",
            "Potential for broader population coverage"
          ]
        },
        {
          name: "IMDELLTRA",
          company: "Amgen",
          launch: "2024",
          sales: 2.10,
          indication: "Small-cell Lung Cancer",
          moa: "DLL3 × CD3-targeting BiTE molecule",
          probabilities: [
            {
              value: 79,
              context: "European Union"
            }
          ],
          features: [
            "First-in-class DLL3 × CD3 BiTE",
            "Impressive efficacy in SCLC",
            "Potential for multiple indications"
          ]
        },
        {
          name: "mRESVIA",
          company: "Moderna",
          launch: "2024",
          sales: 1.40,
          indication: "RSV",
          moa: "mRNA vaccine",
          probabilities: [
            {
              value: 90,
              context: "Japan"
            }
          ],
          features: [
            "First mRNA-based RSV vaccine",
            "Single-dose administration",
            "Strong efficacy profile"
          ]
        },
        {
          name: "SEL-212",
          company: "Sobi",
          launch: "2025",
          sales: 1.70,
          indication: "Gout",
          moa: "ImmTOR + pegylated uricase",
          probabilities: [
            {
              value: 95,
              context: "United States"
            }
          ],
          features: [
            "Novel immune tolerance technology",
            "Monthly administration",
            "Improved immunogenicity profile"
          ]
        },
        {
          name: "Vepdegestrant",
          company: "Arvinas/Pfizer",
          launch: "2025",
          sales: 1.19,
          indication: "Breast Cancer",
          moa: "ER PROTAC degrader",
          probabilities: [
            {
              value: 64,
              context: "European Union"
            }
          ],
          features: [
            "First PROTAC protein degrader",
            "Novel approach to ER degradation",
            "Potential for combination therapy"
          ]
        },
        {
          name: "Zanzalintinib",
          company: "Exelixis",
          launch: "2026",
          sales: 2.60,
          indication: "Multiple Cancers",
          moa: "Multi-targeted tyrosine kinase inhibitor",
          probabilities: [
            {
              value: 43,
              context: "United States"
            }
          ],
          features: [
            "Third-generation TKI",
            "Multiple cancer indications",
            "Improved pharmacokinetics"
          ]
        }
      ];

      return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-8">
          <div className="max-w-[95%] mx-auto space-y-12">
            <div className="text-center space-y-2">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent leading-tight pb-2">
                2025 Drugs to Watch
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Comprehensive Analysis & Market Outlook
              </p>
            </div>
    
            <div className="relative">
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 hover:scale-110 focus:outline-none group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
              </button>
    
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-8 py-8 px-8 hide-scrollbar snap-x snap-mandatory"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {drugs.map((drug, index) => (
                  <div key={index} className="snap-center flex-shrink-0">
                    <DrugCard drug={drug} />
                  </div>
                ))}
              </div>
    
              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 hover:scale-110 focus:outline-none group"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default DrugCards;