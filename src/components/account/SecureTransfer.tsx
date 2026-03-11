
import { CreditCard, ArrowLeftRight, CheckCircle2, Key } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Payment Escrow',
    description: 'Your payment is held securely in escrow until transfer is complete',
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
    iconBg: 'bg-blue-50',
  },
  {
    id: 2,
    title: 'Seller Transfer',
    description: 'Seller transfers account access and original email to you',
    icon: <ArrowLeftRight className="w-6 h-6 text-purple-600" />,
    iconBg: 'bg-purple-50',
  },
  {
    id: 3,
    title: 'Verification',
    description: 'You verify access and confirm everything is as described',
    icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
    iconBg: 'bg-green-50',
  },
  {
    id: 4,
    title: 'Ownership Release',
    description: 'Funds released to seller, you receive full account ownership',
    icon: <Key className="w-6 h-6 text-orange-600" />,
    iconBg: 'bg-orange-50',
    highlight: true, // Adds a darker border like the image
  },
];

const SecureTransfer = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Secure Transfer Process</h2>
        <p className="text-gray-500 mt-1">4-step process to ensure safe and secure account transfer</p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="relative">
            
            {/* Step Number Badge */}
            <div className="absolute -top-4 -left-3 z-10 w-10 h-10 bg-[#141b2d] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
              {step.id}
            </div>

            {/* Card Content */}
            <div className={`h-full p-8 rounded-2xl bg-white border ${step.highlight ? 'border-gray-800' : 'border-gray-100'} shadow-sm flex flex-col items-start gap-4 transition-all hover:shadow-md`}>
              
              {/* Icon Container */}
              <div className={`p-3 rounded-xl ${step.iconBg}`}>
                {step.icon}
              </div>

              {/* Text */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecureTransfer;