import React, { useState, useRef } from 'react';

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const [formData, setFormData] = useState({
    // Step 1
    cellNumber: '',
    age: '',
    address: '',
    
    // Step 2
    portfolioUrl: '',
    resume: null,
    educationalDocs: [],
    
    // Step 3
    taxId: '',
    socialSecurityNumber: '',
    enrollmentCertificate: null,
    healthInsuranceProof: null,
    
    // Step 4
    profilePicture: null,
    idDocument: null,
  });
  
  const [uploadedFiles, setUploadedFiles] = useState({
    resume: null,
    educationalDocs: [],
    enrollmentCertificate: null,
    healthInsuranceProof: null,
    profilePicture: null,
    idDocument: null,
  });

  const fileInputs = {
    resume: useRef(null),
    educationalDocs: useRef(null),
    enrollmentCertificate: useRef(null),
    healthInsuranceProof: useRef(null),
    profilePicture: useRef(null),
    idDocument: useRef(null),
  };

  const stepTitles = [
    "Personal Details",
    "Professional Profile",
    "Legal & Insurance",
    "Identification",
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field, files, isMultiple = false) => {
    if (isMultiple) {
      setUploadedFiles(prev => ({
        ...prev,
        [field]: [...(prev[field] || []), ...files]
      }));
    } else {
      setUploadedFiles(prev => ({
        ...prev,
        [field]: files[0]
      }));
    }
  };

  const triggerFileInput = (field) => {
    fileInputs[field].current?.click();
  };

  const handleFileChange = (field, event, isMultiple = false) => {
    const files = Array.from(event.target.files);
    handleFileUpload(field, files, isMultiple);
  };

  const handleDrop = (field, event, isMultiple = false) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    handleFileUpload(field, files, isMultiple);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const changeStep = (direction) => {
    const nextStep = currentStep + direction;
    if (nextStep < 1 || nextStep > totalSteps) return;
    
    // Here you could add validation before proceeding
    // if (!validateStep(currentStep)) return;
    
    setCurrentStep(nextStep);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { formData, uploadedFiles });
    // Add your submission logic here (API call, etc.)
    alert('Profile completed successfully!');
  };

  const getFileName = (file) => {
    if (!file) return '';
    return file.name.length > 20 
      ? `${file.name.substring(0, 20)}...${file.name.split('.').pop()}`
      : file.name;
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  const StepIndicator = ({ step, title, isActive, isCompleted }) => (
    <div className="flex items-center space-x-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center 
        ${isCompleted ? 'bg-green-500' : isActive ? 'bg-brand-accent' : 'bg-gray-200'}
        ${isCompleted || isActive ? 'text-white' : 'text-gray-500'} font-semibold text-sm`}>
        {isCompleted ? '✓' : step}
      </div>
      <span className={`text-sm font-medium ${isActive ? 'text-slate-800' : 'text-gray-500'}`}>
        {title}
      </span>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 font-sans">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          DeJob<span className="text-brand-blue">Venture</span>
        </h1>
        <p className="text-slate-500 mt-2 text-sm">
          Complete your profile to start applying.
        </p>
      </div>

      {/* Main Form Container */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Progress Bar */}
        <div className="bg-gray-50 border-b border-gray-100 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-brand-blue">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-gray-500">
              {stepTitles[currentStep - 1]}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-brand-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          {/* Step Indicators */}
          <div className="flex justify-between mt-6">
            {[1, 2, 3, 4].map((step) => (
              <StepIndicator
                key={step}
                step={step}
                title={stepTitles[step - 1]}
                isActive={currentStep === step}
                isCompleted={currentStep > step}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          {/* STEP 1: Personal Details */}
          {currentStep === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Cell Number */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Cell Number
                  </label>
                  <input
                    type="tel"
                    value={formData.cellNumber}
                    onChange={(e) => handleInputChange('cellNumber', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="+49 123 456789"
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="e.g. 24"
                    min="18"
                    max="100"
                  />
                </div>

                {/* Address (Full Width) */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Current Address
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all h-24 resize-none"
                    placeholder="Street, City, Postal Code, Country"
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Professional Profile */}
          {currentStep === 2 && (
            <div className="animate-fadeIn space-y-6">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Professional Profile
              </h2>
              
              {/* Portfolio Link */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Portfolio / LinkedIn URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <input
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => handleInputChange('portfolioUrl', e.target.value)}
                    className="w-full pl-10 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="https://"
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Resume / CV
                </label>
                <div
                  className={`file-drop-zone border-2 ${uploadedFiles.resume ? 'border-green-500 bg-green-50' : 'border-dashed border-gray-300'} rounded-xl p-8 text-center cursor-pointer relative`}
                  onClick={() => triggerFileInput('resume')}
                  onDrop={(e) => handleDrop('resume', e)}
                  onDragOver={handleDragOver}
                >
                  <input
                    type="file"
                    ref={fileInputs.resume}
                    onChange={(e) => handleFileChange('resume', e)}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                  <div className="space-y-2">
                    {uploadedFiles.resume ? (
                      <>
                        <svg className="mx-auto h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium text-green-600">{getFileName(uploadedFiles.resume)}</span>
                        </div>
                        <p className="text-xs text-gray-500">Click to change file</p>
                      </>
                    ) : (
                      <>
                        <svg className="mx-auto h-10 w-10 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium text-brand-blue">Click to upload</span>
                          or drag and drop
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOCX up to 5MB</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Educational Docs */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Educational Documents
                </label>
                <div
                  className={`file-drop-zone border-2 ${uploadedFiles.educationalDocs.length > 0 ? 'border-green-500 bg-green-50' : 'border-dashed border-gray-300'} rounded-xl p-4 cursor-pointer relative hover:bg-gray-50`}
                  onClick={() => triggerFileInput('educationalDocs')}
                  onDrop={(e) => handleDrop('educationalDocs', e, true)}
                  onDragOver={handleDragOver}
                >
                  <input
                    type="file"
                    ref={fileInputs.educationalDocs}
                    onChange={(e) => handleFileChange('educationalDocs', e, true)}
                    className="hidden"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  {uploadedFiles.educationalDocs.length > 0 ? (
                    <div className="text-sm text-gray-600">
                      <span className="font-medium text-green-600">
                        {uploadedFiles.educationalDocs.length} file(s) uploaded
                      </span>
                      <ul className="text-xs text-gray-500 mt-1">
                        {uploadedFiles.educationalDocs.slice(0, 3).map((file, index) => (
                          <li key={index}>• {getFileName(file)}</li>
                        ))}
                        {uploadedFiles.educationalDocs.length > 3 && (
                          <li>... and {uploadedFiles.educationalDocs.length - 3} more</li>
                        )}
                      </ul>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-600 flex gap-2 items-center">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      Attach Transcripts / Diplomas
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: German Bureaucracy */}
          {currentStep === 3 && (
            <div className="animate-fadeIn space-y-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                Legal & Insurance
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Required for employment compliance in Germany.
              </p>

              <div className="space-y-6">
                {/* Tax ID & Social Security */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      German Tax ID (Steuer-ID)
                    </label>
                    <input
                      type="text"
                      value={formData.taxId}
                      onChange={(e) => handleInputChange('taxId', e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                      placeholder="11 digits"
                      pattern="[0-9]{11}"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Social Security Number
                    </label>
                    <input
                      type="text"
                      value={formData.socialSecurityNumber}
                      onChange={(e) => handleInputChange('socialSecurityNumber', e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                      placeholder="SV-Nummer"
                    />
                  </div>
                </div>

                {/* Enrollment Certificate */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Certificate of Enrolment (Immatrikulationsbescheinigung)
                  </label>
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex-grow file-drop-zone border ${uploadedFiles.enrollmentCertificate ? 'border-green-500 bg-green-50' : 'border-gray-300'} rounded-lg px-4 py-3 bg-white relative cursor-pointer`}
                      onClick={() => triggerFileInput('enrollmentCertificate')}
                      onDrop={(e) => handleDrop('enrollmentCertificate', e)}
                      onDragOver={handleDragOver}
                    >
                      <input
                        type="file"
                        ref={fileInputs.enrollmentCertificate}
                        onChange={(e) => handleFileChange('enrollmentCertificate', e)}
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      {uploadedFiles.enrollmentCertificate ? (
                        <span className="text-sm text-green-600 font-medium">
                          ✓ {getFileName(uploadedFiles.enrollmentCertificate)}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-500">
                          Upload Valid Certificate...
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Health Insurance */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Health Insurance Proof
                  </label>
                  <p className="text-xs text-gray-500 mb-2">
                    German Public/Private or valid European Insurance Card.
                  </p>
                  <div
                    className={`flex-grow file-drop-zone border ${uploadedFiles.healthInsuranceProof ? 'border-green-500 bg-green-50' : 'border-gray-300'} rounded-lg px-4 py-3 bg-white relative cursor-pointer`}
                    onClick={() => triggerFileInput('healthInsuranceProof')}
                    onDrop={(e) => handleDrop('healthInsuranceProof', e)}
                    onDragOver={handleDragOver}
                  >
                    <input
                      type="file"
                      ref={fileInputs.healthInsuranceProof}
                      onChange={(e) => handleFileChange('healthInsuranceProof', e)}
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    {uploadedFiles.healthInsuranceProof ? (
                      <span className="text-sm text-green-600 font-medium">
                        ✓ {getFileName(uploadedFiles.healthInsuranceProof)}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">
                        Upload Insurance Document...
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Identification & Photos */}
          {currentStep === 4 && (
            <div className="animate-fadeIn">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Identification
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 2x2 Picture */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    2x2 Picture
                  </label>
                  <div
                    className={`aspect-square border-2 ${uploadedFiles.profilePicture ? 'border-green-500' : 'border-dashed border-gray-300'} rounded-full flex flex-col items-center justify-center bg-gray-50 hover:bg-white hover:border-brand-blue transition cursor-pointer relative overflow-hidden group`}
                    onClick={() => triggerFileInput('profilePicture')}
                    onDrop={(e) => handleDrop('profilePicture', e)}
                    onDragOver={handleDragOver}
                  >
                    <input
                      type="file"
                      ref={fileInputs.profilePicture}
                      onChange={(e) => handleFileChange('profilePicture', e)}
                      className="hidden"
                      accept=".jpg,.jpeg,.png"
                    />
                    {uploadedFiles.profilePicture ? (
                      <>
                        <img 
                          src={URL.createObjectURL(uploadedFiles.profilePicture)} 
                          alt="Profile" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-white text-sm font-medium">Change</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <svg className="w-8 h-8 text-gray-400 group-hover:text-brand-blue mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-xs text-gray-500">Upload</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Visa / Passport */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Visa / Passport Copy
                  </label>
                  <div
                    className={`file-drop-zone border-2 ${uploadedFiles.idDocument ? 'border-green-500 bg-green-50' : 'border-dashed border-gray-300'} rounded-xl p-8 text-center cursor-pointer relative h-full flex flex-col justify-center`}
                    onClick={() => triggerFileInput('idDocument')}
                    onDrop={(e) => handleDrop('idDocument', e)}
                    onDragOver={handleDragOver}
                  >
                    <input
                      type="file"
                      ref={fileInputs.idDocument}
                      onChange={(e) => handleFileChange('idDocument', e)}
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    {uploadedFiles.idDocument ? (
                      <>
                        <svg className="mx-auto h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-sm text-gray-600 mt-2">
                          <span className="font-medium text-green-600">{getFileName(uploadedFiles.idDocument)}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Click to change file</p>
                      </>
                    ) : (
                      <>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium text-brand-blue">Upload Scan</span>
                          of ID Page
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Make sure details are clearly visible.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-brand-light rounded-lg border border-blue-100 flex gap-3 items-start">
                <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-brand-dark">
                  Your data is securely stored and only shared with verified
                  employers for visa and contract processing.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => changeStep(-1)}
                className="px-6 py-2.5 text-slate-600 font-semibold hover:text-slate-900 transition-colors"
              >
                Back
              </button>
            )}
            <div className="ml-auto">
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={() => changeStep(1)}
                  className="px-8 py-3 bg-brand-accent hover:bg-blue-800 text-white font-bold rounded-lg shadow-sm transition-all"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-sm transition-all"
                >
                  Complete Profile
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
        
        .file-drop-zone {
          transition: all 0.2s ease;
        }
        
        .file-drop-zone:hover {
          border-color: #2557a7;
          background-color: #f8fafc;
        }
      `}</style>
    </div>
  );
};

export default Application;