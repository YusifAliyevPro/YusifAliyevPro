"use client";
import { Button } from "@nextui-org/react";
import { saveAs } from "file-saver";

export default function DownloadButton() {
  const downloadCV = () => {
    saveAs("/Yusif_Aliyev_Resume_CV_AZ.pdf", "YusifAliyevPro Resume.pdf");
  };

  return (
    <div className="relative flex flex-col items-center justify-center mt-4">
      <Button color="primary" onClick={downloadCV}>
        My Resume
      </Button>
    </div>
  );
}
