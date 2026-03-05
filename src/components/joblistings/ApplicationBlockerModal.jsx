import { X, AlertTriangle, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const ApplicationBlockerModal = ({ isOpen, onClose, reasons }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-red-50 p-6 border-b border-red-100 flex items-start gap-4">
          <div className="p-3 bg-red-100 rounded-full text-red-600 shrink-0">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-red-900">Application Paused</h3>
            <p className="text-sm text-red-700 mt-1">
              You cannot apply for this job yet.
            </p>
          </div>
          <button onClick={onClose} className="ml-auto text-red-400 hover:text-red-700">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center gap-3 text-sm font-medium text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <X className="text-red-500 shrink-0" size={16} />
              {reason}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 pt-0">
          <Link 
            to="/profile" 
            className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            Complete Profile <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationBlockerModal;