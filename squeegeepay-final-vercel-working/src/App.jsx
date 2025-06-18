import React, { useState } from 'react';
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Upload, Download, UserCircle } from 'lucide-react';

export default function SqueegeePayDashboard() {
  const [csvFile, setCsvFile] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleProcess = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      setPreviewData([
        { technician: 'Martin A', jobs: 3, totalRevenue: 300, commission: 99, tips: 20 },
        { technician: 'Cole L', jobs: 2, totalRevenue: 180, commission: 57.6, tips: 10 }
      ]);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#CFEFF3] p-8 text-[#25314D] font-poppins">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <UserCircle className="w-8 h-8" /> SqueegeePay Dashboard
        </h1>

        <Card className="mb-6">
          <CardContent className="p-4">
            <label className="block mb-2 font-semibold">Upload HouseCall Pro CSV</label>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="mb-4 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-full file:bg-orange-500 file:text-white hover:file:bg-orange-600"
            />
            <Button onClick={handleProcess} disabled={!csvFile || isProcessing}>
              <Upload className="mr-2 h-4 w-4" /> Process Payroll
            </Button>
          </CardContent>
        </Card>

        {previewData && (
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-4">Technician Summary</h2>
              <div className="space-y-3">
                {previewData.map((tech, index) => (
                  <div key={index} className="bg-white p-4 rounded-2xl shadow border">
                    <p><strong>Technician:</strong> {tech.technician}</p>
                    <p><strong>Jobs:</strong> {tech.jobs}</p>
                    <p><strong>Total Revenue:</strong> ${tech.totalRevenue.toFixed(2)}</p>
                    <p><strong>Commission:</strong> ${tech.commission.toFixed(2)}</p>
                    <p><strong>Tips:</strong> ${tech.tips.toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                <Download className="mr-2 h-4 w-4" /> Download Excel Report
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
