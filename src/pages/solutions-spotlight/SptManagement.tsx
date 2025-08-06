import { Box, Grid, Typography } from "@mui/material";
import ReuGradientButton from "../../components/common-reusable-components/ReuGradientButton";
import SptLightCard, {
  SpotlightCardItem,
} from "../../components/solutionSpotlight/SptLightCard";
import sptLightRightHorizontalCard from "../../assets/solutions-spotlight/spt-light-cardImages/sptLightRightHorizontalCard.png";
import sptLightTopCardImg1 from "../../assets/solutions-spotlight/spt-light-cardImages/sptLightTopCardImg1.png";
import sptLightTopCardImg2 from "../../assets/solutions-spotlight/spt-light-cardImages/sptLightTopCardImg2.png";
import sptLightTopCardImg3 from "../../assets/solutions-spotlight/spt-light-cardImages/sptLightTopCardImg3.png";
import benefitsToYourInstitutionCardImage1 from "../../assets/solutions-spotlight/benefits-to-your-institution/Rates.png";
import benefitsToYourInstitutionCardImage2 from "../../assets/solutions-spotlight/benefits-to-your-institution/applicant.png";
import benefitsToYourInstitutionCardImage3 from "../../assets/solutions-spotlight/benefits-to-your-institution/data.png";
import benefitsToYourInstitutionCardImage4 from "../../assets/solutions-spotlight/benefits-to-your-institution/error.png";
import benefitsToYourInstitutionCardImage5 from "../../assets/solutions-spotlight/benefits-to-your-institution/scalable.png";
import admissionSystemImage from "../../assets/solutions-spotlight/admissionSystem.png";
import featuresForYourInstitutionCardImage7 from "../../assets/solutions-spotlight/featuresForYourInstitution/ai.png";
import featuresForYourInstitutionCardImage1 from "../../assets/solutions-spotlight/featuresForYourInstitution/admissionManagement.png";
import featuresForYourInstitutionCardImage4 from "../../assets/solutions-spotlight/featuresForYourInstitution/payroll.png";

import { solutionsSpotlightMenuItems } from "../../layout/Nav/TopNav1";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import ReuOutlineBorderedButton from "../../components/common-reusable-components/ReuOutlineBorderedButton";

import studentMgmtImage_1 from "../../assets/solutions-spotlight/studentMgmtImages/studentMgmtImage_1.png";
import studentMgmtImage_2 from "../../assets/solutions-spotlight/studentMgmtImages/studentMgmtImage_2.png";
import studentMgmtImage_3 from "../../assets/solutions-spotlight/studentMgmtImages/studentMgmtImage_3.png";
import studentMgmtImage_4 from "../../assets/solutions-spotlight/studentMgmtImages/studentMgmtImage_4.png";
import studentMgmtBenefiteImage_1 from "../../assets/solutions-spotlight/studentMgmtImages/sm_b1.png";
import studentMgmtBenefiteImage_2 from "../../assets/solutions-spotlight/studentMgmtImages/sm_b2.png";
import studentMgmtBenefiteImage_3 from "../../assets/solutions-spotlight/studentMgmtImages/sm_b3.png";

import attendanceMgmtImage_1 from "../../assets/solutions-spotlight/attendanceMgmtImages/attendanceMgmtImage_1.png";
import attendanceMgmtImage_2 from "../../assets/solutions-spotlight/attendanceMgmtImages/attendanceMgmtImage_2.png";
import attendanceMgmtImage_3 from "../../assets/solutions-spotlight/attendanceMgmtImages/attendanceMgmtImage_3.png";
import attendanceMgmtImage_4 from "../../assets/solutions-spotlight/attendanceMgmtImages/attendanceMgmtImage_4.png";

import examAssesmentMgmtImage_1 from "../../assets/solutions-spotlight/examAssesmentMgmtImages/examAssesmentMgmtImage_1.png";
import examAssesmentMgmtImage_2 from "../../assets/solutions-spotlight/examAssesmentMgmtImages/examAssesmentMgmtImage_2.png";
import examAssesmentMgmtImage_3 from "../../assets/solutions-spotlight/examAssesmentMgmtImages/examAssesmentMgmtImage_3.png";
import examAssesmentMgmtImage_4 from "../../assets/solutions-spotlight/examAssesmentMgmtImages/examAssesmentMgmtImage_4.png";

import admissionMgmtImage_1 from "../../assets/solutions-spotlight/admissionMgmtImages/admissionMgmtImage_1.png";
import admissionMgmtImage_2 from "../../assets/solutions-spotlight/admissionMgmtImages/admissionMgmtImage_2.png";
import admissionMgmtImage_3 from "../../assets/solutions-spotlight/admissionMgmtImages/admissionMgmtImage_3.png";
import admissionMgmtImage_4 from "../../assets/solutions-spotlight/admissionMgmtImages/admissionMgmtImage_4.png";
import admissionMgmtImage_5 from "../../assets/solutions-spotlight/admissionMgmtImages/admissionMgmtImage_5.png";
import admissionMgmtImage_6 from "../../assets/solutions-spotlight/admissionMgmtImages/admissionMgmtImage_6.png";
import admissionMgmtImage_7 from "../../assets/solutions-spotlight/admissionMgmtImages/admissionMgmtImage_7.png";

import academicCalenderMgmtImage_1 from "../../assets/solutions-spotlight/academicCalendarMgmtImages/academicMgmtImage_1.png";
import academicCalenderMgmtImage_2 from "../../assets/solutions-spotlight/academicCalendarMgmtImages/academicMgmtImage_2.png";
import academicCalenderMgmtImage_3 from "../../assets/solutions-spotlight/academicCalendarMgmtImages/academicMgmtImage_3.png";
import academicCalenderMgmtImage_4 from "../../assets/solutions-spotlight/academicCalendarMgmtImages/academicMgmtImage_4.png";
import academicCalenderMgmtImage_5 from "../../assets/solutions-spotlight/academicCalendarMgmtImages/academicMgmtImage_5.png";

import timetableMgmtImage_1 from "../../assets/solutions-spotlight/timetableMgmtImages/timetableMgmtImage_1.png";
import timetableMgmtImage_2 from "../../assets/solutions-spotlight/timetableMgmtImages/timetableMgmtImage_2.png";
import timetableMgmtImage_3 from "../../assets/solutions-spotlight/timetableMgmtImages/timetableMgmtImage_3.png";
import timetableMgmtImage_4 from "../../assets/solutions-spotlight/timetableMgmtImages/timetableMgmtImage_4.png";
import timetableMgmtImage_5 from "../../assets/solutions-spotlight/timetableMgmtImages/timetableMgmtImage_5.png";
import timetableMgmtImage_6 from "../../assets/solutions-spotlight/timetableMgmtImages/timetableMgmtImage_6.png";
import timetableMgmtImage_7 from "../../assets/solutions-spotlight/timetableMgmtImages/timetableMgmtImage_7.png";

import placementMgmtImage_1 from "../../assets/solutions-spotlight/placementMgmtImages/placementMgmtImage_1.png";
import placementMgmtImage_2 from "../../assets/solutions-spotlight/placementMgmtImages/placementMgmtImage_2.png";
import placementMgmtImage_3 from "../../assets/solutions-spotlight/placementMgmtImages/placementMgmtImage_3.png";
import placementMgmtImage_4 from "../../assets/solutions-spotlight/placementMgmtImages/placementMgmtImage_4.png";
import placementMgmtImage_5 from "../../assets/solutions-spotlight/placementMgmtImages/placementMgmtImage_5.png";
import placementMgmtImage_6 from "../../assets/solutions-spotlight/placementMgmtImages/placementMgmtImage_6.png";
import placementMgmtImage_7 from "../../assets/solutions-spotlight/placementMgmtImages/placementMgmtImage_7.png";
import placementMgmtImage_8 from "../../assets/solutions-spotlight/placementMgmtImages/placementMgmtImage_8.png";

import s_s_behaviour_MgmtImage_1 from "../../assets/solutions-spotlight/student-staff-behaviour-management/behaviourMgmtImage_1.png";
import s_s_behaviour_MgmtImage_2 from "../../assets/solutions-spotlight/student-staff-behaviour-management/behaviourMgmtImage_2.png";
import s_s_behaviour_MgmtImage_3 from "../../assets/solutions-spotlight/student-staff-behaviour-management/behaviourMgmtImage_3.png";
import s_s_behaviour_MgmtImage_4 from "../../assets/solutions-spotlight/student-staff-behaviour-management/behaviourMgmtImage_4.png";

import s_s_appraisel_MgmtImage_1 from "../../assets/solutions-spotlight/student-staff-appraisel-management/appraiselMgmtImage_1.png";
import s_s_appraisel_MgmtImage_2 from "../../assets/solutions-spotlight/student-staff-appraisel-management/appraiselMgmtImage_2.png";
import s_s_appraisel_MgmtImage_3 from "../../assets/solutions-spotlight/student-staff-appraisel-management/appraiselMgmtImage_3.png";
import s_s_appraisel_MgmtImage_4 from "../../assets/solutions-spotlight/student-staff-appraisel-management/appraiselMgmtImage_4.png";

import research_publication_MgmtImage_1 from "../../assets/solutions-spotlight/research-and-publication-management/researchMgmtImage_1.png";
import research_publication_MgmtImage_2 from "../../assets/solutions-spotlight/research-and-publication-management/researchMgmtImage_2.png";
import research_publication_MgmtImage_3 from "../../assets/solutions-spotlight/research-and-publication-management/researchMgmtImage_3.png";

import lms_MgmtImage_1 from "../../assets/solutions-spotlight/lmsImages/lmsMgmtImage_1.png";
import lms_MgmtImage_2 from "../../assets/solutions-spotlight/lmsImages/lmsMgmtImage_2.png";
import lms_MgmtImage_3 from "../../assets/solutions-spotlight/lmsImages/lmsMgmtImage_3.png";
import lms_MgmtImage_4 from "../../assets/solutions-spotlight/lmsImages/lmsMgmtImage_4.png";
import lms_MgmtImage_5 from "../../assets/solutions-spotlight/lmsImages/lmsMgmtImage_5.png";

import alumini_MgmtImage_1 from "../../assets/solutions-spotlight/alumni-management/aluminiMgmtImage_1.png";
import alumini_MgmtImage_2 from "../../assets/solutions-spotlight/alumni-management/aluminiMgmtImage_2.png";
import alumini_MgmtImage_3 from "../../assets/solutions-spotlight/alumni-management/aluminiMgmtImage_3.png";
import alumini_MgmtImage_4 from "../../assets/solutions-spotlight/alumni-management/aluminiMgmtImage_4.png";
import alumini_MgmtImage_5 from "../../assets/solutions-spotlight/alumni-management/aluminiMgmtImage_5.png";

import pta_MgmtImage_1 from "../../assets/solutions-spotlight/ptaMgmtImages/ptaMgmtImage_1.png";
import pta_MgmtImage_2 from "../../assets/solutions-spotlight/ptaMgmtImages/ptaMgmtImage_2.png";
import pta_MgmtImage_3 from "../../assets/solutions-spotlight/ptaMgmtImages/ptaMgmtImage_3.png";
import pta_MgmtImage_4 from "../../assets/solutions-spotlight/ptaMgmtImages/ptaMgmtImage_4.png";

import backupRestoreMgmtImage_1 from "../../assets/solutions-spotlight/backup-restore-management/backupRestoreMgmtImage_1.png";
import backupRestoreMgmtImage_2 from "../../assets/solutions-spotlight/backup-restore-management/backupRestoreMgmtImage_2.png";
import backupRestoreMgmtImage_3 from "../../assets/solutions-spotlight/backup-restore-management/backupRestoreMgmtImage_3.png";
import backupRestoreMgmtImage_4 from "../../assets/solutions-spotlight/backup-restore-management/backupRestoreMgmtImage_4.png";

import customerLetterIDMgmtImage_1 from "../../assets/solutions-spotlight/custom-letter-and-id-card-generation/customerLetterIDMgmtImage_1.png";
import customerLetterIDMgmtImage_2 from "../../assets/solutions-spotlight/custom-letter-and-id-card-generation/customerLetterIDMgmtImage_2.png";
import customerLetterIDMgmtImage_3 from "../../assets/solutions-spotlight/custom-letter-and-id-card-generation/customerLetterIDMgmtImage_3.png";
import customerLetterIDMgmtImage_4 from "../../assets/solutions-spotlight/custom-letter-and-id-card-generation/customerLetterIDMgmtImage_4.png";

import roleDashboardMgmtImage_1 from "../../assets/solutions-spotlight/role-wise-dashboard/roleDashboardMgmtImage_1.png";
import roleDashboardMgmtImage_2 from "../../assets/solutions-spotlight/role-wise-dashboard/roleDashboardMgmtImage_2.png";
import roleDashboardMgmtImage_3 from "../../assets/solutions-spotlight/role-wise-dashboard/roleDashboardMgmtImage_3.png";
import roleDashboardMgmtImage_4 from "../../assets/solutions-spotlight/role-wise-dashboard/roleDashboardMgmtImage_4.png";

import rolePrivilageMgmtImage_1 from "../../assets/solutions-spotlight/role-and-privilege-management/rolePrivilageMgmtImage_1.png";
import rolePrivilageMgmtImage_2 from "../../assets/solutions-spotlight/role-and-privilege-management/rolePrivilageMgmtImage_2.png";
import rolePrivilageMgmtImage_3 from "../../assets/solutions-spotlight/role-and-privilege-management/rolePrivilageMgmtImage_3.png";
import rolePrivilageMgmtImage_4 from "../../assets/solutions-spotlight/role-and-privilege-management/rolePrivilageMgmtImage_4.png";

import reqApprovalMgmtImage_1 from "../../assets/solutions-spotlight/req-approval-management/reqApprovalMgmtImage_1.png";
import reqApprovalMgmtImage_2 from "../../assets/solutions-spotlight/req-approval-management/reqApprovalMgmtImage_2.png";
import reqApprovalMgmtImage_3 from "../../assets/solutions-spotlight/req-approval-management/reqApprovalMgmtImage_3.png";
import reqApprovalMgmtImage_4 from "../../assets/solutions-spotlight/req-approval-management/reqApprovalMgmtImage_4.png";

import jobRecruitMgmtImage_1 from "../../assets/solutions-spotlight/job-recruitment-management/jobRecruitMgmtImage_1.png";
import jobRecruitMgmtImage_2 from "../../assets/solutions-spotlight/job-recruitment-management/jobRecruitMgmtImage_2.png";
import jobRecruitMgmtImage_3 from "../../assets/solutions-spotlight/job-recruitment-management/jobRecruitMgmtImage_3.png";
import jobRecruitMgmtImage_4 from "../../assets/solutions-spotlight/job-recruitment-management/jobRecruitMgmtImage_4.png";

import payrollMgmtImage_1 from "../../assets/solutions-spotlight/payroll-management/payrollMgmtImage_1.png";
import payrollMgmtImage_2 from "../../assets/solutions-spotlight/payroll-management/payrollMgmtImage_2.png";
import payrollMgmtImage_3 from "../../assets/solutions-spotlight/payroll-management/payrollMgmtImage_3.png";
import payrollMgmtImage_4 from "../../assets/solutions-spotlight/payroll-management/payrollMgmtImage_4.png";
import payrollMgmtImage_5 from "../../assets/solutions-spotlight/payroll-management/payrollMgmtImage_5.png";
import payrollMgmtImage_6 from "../../assets/solutions-spotlight/payroll-management/payrollMgmtImage_6.png";
import payrollMgmtImage_7 from "../../assets/solutions-spotlight/payroll-management/payrollMgmtImage_7.png";
import payrollMgmtImage_8 from "../../assets/solutions-spotlight/payroll-management/payrollMgmtImage_8.png";

import staffMgmtImage_1 from "../../assets/solutions-spotlight/staff-management/staffMgmtImage_1.png";
import staffMgmtImage_2 from "../../assets/solutions-spotlight/staff-management/staffMgmtImage_2.png";
import staffMgmtImage_3 from "../../assets/solutions-spotlight/staff-management/staffMgmtImage_3.png";
import staffMgmtImage_4 from "../../assets/solutions-spotlight/staff-management/staffMgmtImage_4.png";
import staffMgmtImage_5 from "../../assets/solutions-spotlight/staff-management/staffMgmtImage_5.png";
import staffMgmtImage_6 from "../../assets/solutions-spotlight/staff-management/staffMgmtImage_6.png";
import staffMgmtImage_7 from "../../assets/solutions-spotlight/staff-management/staffMgmtImage_7.png";

import utilityMgmtImage_1 from "../../assets/solutions-spotlight/utility-management/utilityMgmtImage_1.png";
import utilityMgmtImage_2 from "../../assets/solutions-spotlight/utility-management/utilityMgmtImage_2.png";
import utilityMgmtImage_3 from "../../assets/solutions-spotlight/utility-management/utilityMgmtImage_3.png";
import utilityMgmtImage_4 from "../../assets/solutions-spotlight/utility-management/utilityMgmtImage_4.png";

import canteenMgmtImage_1 from "../../assets/solutions-spotlight/canteen-management/canteenMgmtImage_1.png";
import canteenMgmtImage_2 from "../../assets/solutions-spotlight/canteen-management/canteenMgmtImage_2.png";
import canteenMgmtImage_3 from "../../assets/solutions-spotlight/canteen-management/canteenMgmtImage_3.png";
import canteenMgmtImage_4 from "../../assets/solutions-spotlight/canteen-management/canteenMgmtImage_4.png";

import inventoryAssetMgmtImage_1 from "../../assets/solutions-spotlight/inventory-and-asset-management/inventoryAssetMgmtImage_1.png";
import inventoryAssetMgmtImage_2 from "../../assets/solutions-spotlight/inventory-and-asset-management/inventoryAssetMgmtImage_2.png";
import inventoryAssetMgmtImage_3 from "../../assets/solutions-spotlight/inventory-and-asset-management/inventoryAssetMgmtImage_3.png";
import inventoryAssetMgmtImage_4 from "../../assets/solutions-spotlight/inventory-and-asset-management/inventoryAssetMgmtImage_4.png";
import inventoryAssetMgmtImage_5 from "../../assets/solutions-spotlight/inventory-and-asset-management/inventoryAssetMgmtImage_5.png";
import inventoryAssetMgmtImage_6 from "../../assets/solutions-spotlight/inventory-and-asset-management/inventoryAssetMgmtImage_6.png";
import inventoryAssetMgmtImage_7 from "../../assets/solutions-spotlight/inventory-and-asset-management/inventoryAssetMgmtImage_7.png";

import transportMgmtImage_1 from "../../assets/solutions-spotlight/transport-management/transportMgmtImage_1.png";
import transportMgmtImage_2 from "../../assets/solutions-spotlight/transport-management/transportMgmtImage_2.png";
import transportMgmtImage_3 from "../../assets/solutions-spotlight/transport-management/transportMgmtImage_3.png";
import transportMgmtImage_4 from "../../assets/solutions-spotlight/transport-management/transportMgmtImage_4.png";

import hostalMgmtImage_1 from "../../assets/solutions-spotlight/hostel-management/hostalMgmtImage_1.png";
import hostalMgmtImage_2 from "../../assets/solutions-spotlight/hostel-management/hostalMgmtImage_2.png";
import hostalMgmtImage_3 from "../../assets/solutions-spotlight/hostel-management/hostalMgmtImage_3.png";
import hostalMgmtImage_4 from "../../assets/solutions-spotlight/hostel-management/hostalMgmtImage_4.png";

import accountingMgmtImage_1 from "../../assets/solutions-spotlight/accounting-management/accountingMgmtImage_1.png";
import accountingMgmtImage_2 from "../../assets/solutions-spotlight/accounting-management/accountingMgmtImage_2.png";
import accountingMgmtImage_3 from "../../assets/solutions-spotlight/accounting-management/accountingMgmtImage_3.png";
import accountingMgmtImage_4 from "../../assets/solutions-spotlight/accounting-management/accountingMgmtImage_4.png";

import feeMgmtImage_1 from "../../assets/solutions-spotlight/fees-management/feeMgmtImage_1.png";
import feeMgmtImage_2 from "../../assets/solutions-spotlight/fees-management/feeMgmtImage_2.png";
import feeMgmtImage_3 from "../../assets/solutions-spotlight/fees-management/feeMgmtImage_3.png";
import feeMgmtImage_4 from "../../assets/solutions-spotlight/fees-management/feeMgmtImage_4.png";
import feeMgmtImage_5 from "../../assets/solutions-spotlight/fees-management/feeMgmtImage_5.png";
import feeMgmtImage_6 from "../../assets/solutions-spotlight/fees-management/feeMgmtImage_6.png";
import feeMgmtImage_7 from "../../assets/solutions-spotlight/fees-management/feeMgmtImage_7.png";
import feeMgmtImage_8 from "../../assets/solutions-spotlight/fees-management/feeMgmtImage_8.png";

import bookingMgmtImage_1 from "../../assets/solutions-spotlight/booking-management/bookingMgmtImage_1.png";
import bookingMgmtImage_2 from "../../assets/solutions-spotlight/booking-management/bookingMgmtImage_2.png";
import bookingMgmtImage_3 from "../../assets/solutions-spotlight/booking-management/bookingMgmtImage_3.png";
import bookingMgmtImage_4 from "../../assets/solutions-spotlight/booking-management/bookingMgmtImage_4.png";

import sptHeaderImg_1 from "../../assets/solutions-spotlight/spotlight-header-images/sptHeaderImg_1.png";
import sptHeaderImg_2 from "../../assets/solutions-spotlight/spotlight-header-images/sptHeaderImg_2.png";
import sptHeaderImg_3 from "../../assets/solutions-spotlight/spotlight-header-images/sptHeaderImg_3.png";
import sptHeaderImg_4 from "../../assets/solutions-spotlight/spotlight-header-images/sptHeaderImg_4.png";
import sptHeaderImg_5 from "../../assets/solutions-spotlight/spotlight-header-images/sptHeaderImg_5.png";

import communicationMgmtImage_1 from "../../assets/solutions-spotlight/communication-management/communicationMgmtImage_1.png";
import communicationMgmtImage_2 from "../../assets/solutions-spotlight/communication-management/communicationMgmtImage_2.png";

import visitorMgmtImage_1 from "../../assets/solutions-spotlight/visitor-management/visitorMgmtImage_1.png";
import visitorMgmtImage_2 from "../../assets/solutions-spotlight/visitor-management/visitorMgmtImage_2.png";
import visitorMgmtImage_3 from "../../assets/solutions-spotlight/visitor-management/visitorMgmtImage_3.png";

import complientMgmtImage_1 from "../../assets/solutions-spotlight/complaint-feedback-management/complientMgmtImage_1.png";
import complientMgmtImage_2 from "../../assets/solutions-spotlight/complaint-feedback-management/complientMgmtImage_2.png";
import complientMgmtImage_3 from "../../assets/solutions-spotlight/complaint-feedback-management/complientMgmtImage_3.png";
import complientMgmtImage_4 from "../../assets/solutions-spotlight/complaint-feedback-management/complientMgmtImage_4.png";
import complientMgmtImage_5 from "../../assets/solutions-spotlight/complaint-feedback-management/complientMgmtImage_5.png";
import complientMgmtImage_6 from "../../assets/solutions-spotlight/complaint-feedback-management/complientMgmtImage_6.png";

import eventMgmtImage_1 from "../../assets/solutions-spotlight/event-management/eventMgmtImage_1.png";
import eventMgmtImage_2 from "../../assets/solutions-spotlight/event-management/eventMgmtImage_2.png";
import eventMgmtImage_3 from "../../assets/solutions-spotlight/event-management/eventMgmtImage_3.png";
import eventMgmtImage_4 from "../../assets/solutions-spotlight/event-management/eventMgmtImage_4.png";
import eventMgmtImage_5 from "../../assets/solutions-spotlight/event-management/eventMgmtImage_5.png";
import eventMgmtImage_6 from "../../assets/solutions-spotlight/event-management/eventMgmtImage_6.png";

import AiMgmtImage_1 from "../../assets/solutions-spotlight/edumaat-ai/AiMgmtImage_1.png";
import AiMgmtImage_2 from "../../assets/solutions-spotlight/edumaat-ai/AiMgmtImage_2.png";
import AiMgmtImage_3 from "../../assets/solutions-spotlight/edumaat-ai/AiMgmtImage_3.png";
import AiMgmtImage_4 from "../../assets/solutions-spotlight/edumaat-ai/AiMgmtImage_4.png";
import AiMgmtImage_5 from "../../assets/solutions-spotlight/edumaat-ai/AiMgmtImage_5.png";
import AiMgmtImage_6 from "../../assets/solutions-spotlight/edumaat-ai/AiMgmtImage_6.png";
import AiMgmtImage_7 from "../../assets/solutions-spotlight/edumaat-ai/AiMgmtImage_7.png";
import AiMgmtImage_8 from "../../assets/solutions-spotlight/edumaat-ai/AiMgmtImage_8.png";
import AiMgmtImage_9 from "../../assets/solutions-spotlight/edumaat-ai/AiMgmtImage_9.png";

import IntegrationMgmtImage_1 from "../../assets/solutions-spotlight/integration-payment/IntegrationMgmtImage_1.png";
import IntegrationMgmtImage_2 from "../../assets/solutions-spotlight/integration-payment/IntegrationMgmtImage_2.png";
import IntegrationMgmtImage_3 from "../../assets/solutions-spotlight/integration-payment/IntegrationMgmtImage_3.png";
import IntegrationMgmtImage_4 from "../../assets/solutions-spotlight/integration-payment/IntegrationMgmtImage_4.png";
import IntegrationMgmtImage_5 from "../../assets/solutions-spotlight/integration-payment/IntegrationMgmtImage_5.png";
import IntegrationMgmtImage_6 from "../../assets/solutions-spotlight/integration-payment/IntegrationMgmtImage_6.png";
import IntegrationMgmtImage_7 from "../../assets/solutions-spotlight/integration-payment/IntegrationMgmtImage_7.png";
import IntegrationMgmtImage_8 from "../../assets/solutions-spotlight/integration-payment/IntegrationMgmtImage_8.png";
import IntegrationMgmtImage_9 from "../../assets/solutions-spotlight/integration-payment/IntegrationMgmtImage_9.png";

import formMgmtImage_1 from "../../assets/solutions-spotlight/form-builder/formMgmtImage_1.png";
import formMgmtImage_2 from "../../assets/solutions-spotlight/form-builder/formMgmtImage_2.png";
import formMgmtImage_3 from "../../assets/solutions-spotlight/form-builder/formMgmtImage_3.png";
import formMgmtImage_4 from "../../assets/solutions-spotlight/form-builder/formMgmtImage_4.png";
import formMgmtImage_5 from "../../assets/solutions-spotlight/form-builder/formMgmtImage_5.png";
import formMgmtImage_6 from "../../assets/solutions-spotlight/form-builder/formMgmtImage_6.png";
import formMgmtImage_7 from "../../assets/solutions-spotlight/form-builder/formMgmtImage_7.png";
import formMgmtImage_8 from "../../assets/solutions-spotlight/form-builder/formMgmtImage_8.png";

import reportBuilderMgmtImage_1 from "../../assets/solutions-spotlight/custom-report-builder/reportBuilderMgmtImage_1.png";
import reportBuilderMgmtImage_2 from "../../assets/solutions-spotlight/custom-report-builder/reportBuilderMgmtImage_2.png";
import reportBuilderMgmtImage_3 from "../../assets/solutions-spotlight/custom-report-builder/reportBuilderMgmtImage_3.png";
import reportBuilderMgmtImage_4 from "../../assets/solutions-spotlight/custom-report-builder/reportBuilderMgmtImage_4.png";
import reportBuilderMgmtImage_5 from "../../assets/solutions-spotlight/custom-report-builder/reportBuilderMgmtImage_5.png";
import reportBuilderMgmtImage_6 from "../../assets/solutions-spotlight/custom-report-builder/reportBuilderMgmtImage_6.png";
import reportBuilderMgmtImage_7 from "../../assets/solutions-spotlight/custom-report-builder/reportBuilderMgmtImage_7.png";
import reportBuilderMgmtImage_8 from "../../assets/solutions-spotlight/custom-report-builder/reportBuilderMgmtImage_8.png";

import taskTodoMgmtImage_1 from "../../assets/solutions-spotlight/taskToDomanagement/taskTodoMgmtImage_1.png";
import taskTodoMgmtImage_2 from "../../assets/solutions-spotlight/taskToDomanagement/taskTodoMgmtImage_2.png";
import taskTodoMgmtImage_3 from "../../assets/solutions-spotlight/taskToDomanagement/taskTodoMgmtImage_3.png";
import taskTodoMgmtImage_4 from "../../assets/solutions-spotlight/taskToDomanagement/taskTodoMgmtImage_4.png";
import taskTodoMgmtImage_5 from "../../assets/solutions-spotlight/taskToDomanagement/taskTodoMgmtImage_5.png";
import taskTodoMgmtImage_6 from "../../assets/solutions-spotlight/taskToDomanagement/taskTodoMgmtImage_6.png";

import libraryMgmtImage_1 from "../../assets/solutions-spotlight/library-management/libraryMgmtImage_1.png";
import libraryMgmtImage_2 from "../../assets/solutions-spotlight/library-management/libraryMgmtImage_2.png";
import libraryMgmtImage_3 from "../../assets/solutions-spotlight/library-management/libraryMgmtImage_3.png";
import libraryMgmtImage_4 from "../../assets/solutions-spotlight/library-management/libraryMgmtImage_4.png";
import libraryMgmtImage_5 from "../../assets/solutions-spotlight/library-management/libraryMgmtImage_5.png";
import libraryMgmtImage_6 from "../../assets/solutions-spotlight/library-management/libraryMgmtImage_6.png";
import libraryMgmtImage_7 from "../../assets/solutions-spotlight/library-management/libraryMgmtImage_7.png";

import documentMgmtImage_1 from "../../assets/solutions-spotlight/document-management/documentMgmtImage_1.png";
import documentMgmtImage_2 from "../../assets/solutions-spotlight/document-management/documentMgmtImage_2.png";
import documentMgmtImage_3 from "../../assets/solutions-spotlight/document-management/documentMgmtImage_3.png";
import documentMgmtImage_4 from "../../assets/solutions-spotlight/document-management/documentMgmtImage_4.png";
import documentMgmtImage_5 from "../../assets/solutions-spotlight/document-management/documentMgmtImage_5.png";
import documentMgmtImage_6 from "../../assets/solutions-spotlight/document-management/documentMgmtImage_6.png";
import documentMgmtImage_7 from "../../assets/solutions-spotlight/document-management/documentMgmtImage_7.png";
import documentMgmtImage_8 from "../../assets/solutions-spotlight/document-management/documentMgmtImage_8.png";

import notificationRemainderMgmtImage_1 from "../../assets/solutions-spotlight/notification-reminder-management/notificationRemainderMgmtImage_1.png";
import notificationRemainderMgmtImage_2 from "../../assets/solutions-spotlight/notification-reminder-management/notificationRemainderMgmtImage_2.png";
import notificationRemainderMgmtImage_3 from "../../assets/solutions-spotlight/notification-reminder-management/notificationRemainderMgmtImage_3.png";
import notificationRemainderMgmtImage_4 from "../../assets/solutions-spotlight/notification-reminder-management/notificationRemainderMgmtImage_4.png";
import notificationRemainderMgmtImage_5 from "../../assets/solutions-spotlight/notification-reminder-management/notificationRemainderMgmtImage_5.png";
import notificationRemainderMgmtImage_6 from "../../assets/solutions-spotlight/notification-reminder-management/notificationRemainderMgmtImage_6.png";
import notificationRemainderMgmtImage_7 from "../../assets/solutions-spotlight/notification-reminder-management/notificationRemainderMgmtImage_7.png";

import assignmentMgmtImage_1 from "../../assets/solutions-spotlight/assignment-management/assignmentMgmtImage_1.png";
import assignmentMgmtImage_2 from "../../assets/solutions-spotlight/assignment-management/assignmentMgmtImage_2.png";
import assignmentMgmtImage_3 from "../../assets/solutions-spotlight/assignment-management/assignmentMgmtImage_3.png";
import assignmentMgmtImage_4 from "../../assets/solutions-spotlight/assignment-management/assignmentMgmtImage_4.png";
import LazyImage from "../../components/LazyImage";
import LazyBoxImage from "../../components/LazyBoxImage";
import { useAppDispatch } from "../../hooks";
import { reduceBackdrop } from "../../features/auth/authSlice";

interface SpotLightCardItems {
  id: string | number;
  items: SpotlightCardItem[];
}

interface whyChooseEdumaatContent {
  id: string | number;
  title: string;
  content: string;
  buttonText: string;
}

const cardContentHeader = [
  {
    id: "student-management",
    title: "Smarter Education with Intelligent Automation",
    content:
      "EDUMAAT’s AI-Powered Student Management Software uses intelligent automation to streamline academic and administrative tasks, offering personalized experiences for students, staff, and administrators.",
    img: "",
  },
  {
    id: "attendance-management",
    title: "Smarter Tracking. Better Accuracy.",
    content:
      "EDUMAAT’s AI-Powered Attendance Management Software automates attendance tracking using intelligent technology, ensuring accuracy, efficiency, and real-time insights.",
  },
  {
    id: "examination-or-assessment-management",
    title: "Efficient. Fair. Smart.",
    content:
      "EDUMAAT’s AI-powered Exam and Assessment Software simplifies the entire exam process, from planning to grading, helping educational institutions save time, enhance fairness, and improve outcomes. Whether it’s a small quiz or a large-scale university exam, EDUMAAT brings intelligence and automation to every step of the exam lifecycle.",
  },
  {
    id: "academic-calendar",
    title: "Efficient Scheduling Made Simple",
    content:
      "EDUMAAT’s Academic Calendar Management software makes planning and managing academic schedules seamless. Powered by AI, it helps institutions optimize course scheduling, avoid conflicts, and ensure that all stakeholders stay informed. Whether it's holidays, exams, or regular classes, EDUMAAT ensures smooth scheduling from start to finish.",
  },
  {
    id: "pta-parent-teacher-association",
    title: "Bringing Parents and Teachers Together for Student Success",
    content:
      "EDUMAAT’s PTA Management Software simplifies communication and collaboration between parents and teachers, ensuring a seamless flow of information, updates, and involvement in student progress.",
  },
  {
    id: "alumni-management",
    title: "Fostering Lifelong Connections",
    content:
      "EDUMAAT’s Alumni Management Software helps institutions maintain strong relationships with their alumni, ensuring continued engagement, networking, and support for both the school and its graduates.",
  },
  {
    id: "lms-quiz-course-interactive-meeting",
    title: "Empowering Education Through Technology",
    content:
      "EDUMAAT’s Learning Management Software transforms the educational experience by streamlining content delivery, student engagement, and performance tracking, all in one easy-to-use platform.",
  },
  {
    id: "research-and-publication-management",
    title: "Simplifying Research and Publishing",
    content:
      "EDUMAAT’s Research and Publication Management software streamlines the entire research lifecycle, from project tracking to publication submission, ensuring efficiency and quality in academic work.",
  },
  {
    id: "student-and-staff-appraisal-management",
    title: "Efficient Evaluation for Growth and Development",
    content:
      "EDUMAAT’s Appraisal Management Software simplifies the process of evaluating both students and staff, enabling clear feedback, performance tracking, and continuous improvement.",
  },
  {
    id: "student-and-staff-behaviour-management",
    title: "Promoting Positive Behaviour and Discipline",
    content:
      "EDUMAAT’s Behaviour Management Software helps schools and institutions track, manage, and improve student behaviour through efficient reporting and real-time feedback.",
  },
  {
    id: "admission-management",
    title:
      "AI-Powered Admission Management System – Transforming Student Enrollments with EDUMAAT ERP",
    content:
      "Streamline your institution’s admissions process with EDUMAAT’s intelligent Admission Management System, powered by AI. Designed to simplify, accelerate, and enhance the entire admission lifecycle, this module ensures institutions can manage applications efficiently while offering a seamless experience to prospective students.",
  },
  {
    id: "staff-management",
    title:
      "Staff Management System – Simplify and Streamline HR with EDUMAAT ERP ",
    content:
      "EDUMAAT’s Staff Management System is a comprehensive solution that enables educational institutions to efficiently manage every aspect of the employee lifecycle. From recruitment to retirement, the module ensures smooth operations, better compliance, and improved workforce engagement.",
  },
  {
    id: "fees-management",
    title:
      "Fees Management System – Simplify Fee Collection and Financial Control with EDUMAAT ERP ",
    content:
      "EDUMAAT’s Fees Management System is a robust and automated solution designed to handle all aspects of fee collection, tracking, and reporting for educational institutions. Whether it's tuition, hostel, transport, or exam fees, our system ensures accuracy, transparency, and ease of access for administrators, students, and parents. ",
  },
  {
    id: "payroll-management",
    title:
      "Payroll Management System – Simplify Salary Processing with EDUMAAT ERP ",
    content:
      "EDUMAAT’s Payroll Management System is a complete, easy-to-use module designed to automate salary processing, manage statutory compliance, and streamline payroll operations for educational institutions. From payslip generation to tax deductions, EDUMAAT ensures your payroll is accurate, timely, and fully compliant.",
  },
  {
    id: "inventory-and-asset-management",
    title:
      "Accounts, Inventory, Invoice & Asset Management – Powering Institutional Efficiency with EDUMAAT ERP ",
    content:
      "Take full control of your institution’s financial and operational backbone with EDUMAAT’s integrated Accounts, Inventory, Invoice & Asset Management module. Designed specifically for educational institutions, this suite ensures accurate financial tracking, efficient resource management, and complete asset visibility—everything you need to streamline operations and support compliance.",
  },
  {
    id: "account-management",
    title: " Accounts Management ",
    content:
      "Stay financially sound with a powerful accounting engine that simplifies everything from daily transactions to annual audits.",
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    content:
      "Track every item—from lab supplies to stationery—with a centralized inventory system that eliminates waste and stock-out situations. ",
  },
  {
    id: "invoice-management",
    title: "Invoice Management",
    content:
      "Automate the creation, distribution, and tracking of invoices for students, vendors, and service providers with ease. ",
  },
  {
    id: "assets-management",
    title: "Asset Management ",
    content:
      "Maintain and monitor your physical and digital assets across departments with complete lifecycle tracking. ",
  },
  {
    id: "placement",
    title: "Seamless Placement Process for Student Success",
    content:
      "EDUMAAT’s Placement Management Software simplifies and streamlines the placement process, helping students connect with top employers and ensuring a smooth transition from academics to professional life.",
  },
  {
    id: "edumaat-ai",
    title:
      "EDUMAAT AI – Redefining Institutional Intelligence with AI-Driven Automation",
    content:
      "Unlock the power of Artificial Intelligence to elevate every aspect of your educational institution’s operations. EDUMAAT AI integrates seamlessly with your ERP ecosystem to deliver smarter decision-making, predictive capabilities, and hyper-personalized experiences across academic and administrative processes. Whether it’s student engagement, academic planning, operations, or performance tracking—EDUMAAT AI brings intelligence and automation to the core of institutional success.",
  },
  {
    id: "timetable-management",
    title:
      "AI-Powered Timetable Management – Optimize Academic Schedules with EDUMAAT ERP ",
    content:
      "EDUMAAT’s Timetable Management System, powered by intelligent automation, simplifies the complex task of creating, managing, and adjusting academic schedules. The system ensures optimal resource utilization while respecting faculty availability, subject priorities, and institutional policies. ",
  },
  //hr-administration
  {
    id: "job-recruitment-management",
    title: "Organize, Track, and Fulfil Hiring Needs",
    content:
      "EDUMAAT’s Job Requirement Management Software helps institutions and HR teams manage job needs efficiently — from identifying vacancies to closing positions with the right talent.",
  },
  {
    id: "requisition-and-approval-management",
    title: "Streamline Requests. Accelerate Approvals.",
    content:
      "EDUMAAT’s Requisition and Approval Management Software simplifies the process of submitting, tracking, and approving internal requests—making operations smoother and faster.",
  },
  {
    id: "role-and-privilege-management",
    title: "Control Access. Ensure Security.",
    content:
      "EDUMAAT’s Role & Privilege Management system helps institutions define, assign, and manage user roles and access levels—ensuring secure and structured operations across the platform.",
  },
  {
    id: "role-wise-dashboard",
    title: "Personalized Dashboards for Every Role",
    content:
      "EDUMAAT’s Role-Wise Dashboard feature provides tailored views and insights based on the user’s role—ensuring relevant information is always front and centre.",
  },
  {
    id: "custom-letter-and-id-card-generation",
    title: "Automate Personal Documents with Ease",
    content:
      "EDUMAAT’s Letter and ID Card Generation module allows institutions to quickly create customized letters and ID cards for students, staff, and other stakeholders—saving time and ensuring consistency.",
  },
  {
    id: "backup-restore-management",
    title: "Secure Your Data. Recover with Confidence.",
    content:
      "EDUMAAT’s Backup & Restore feature ensures that all your institutional data is securely stored and easily recoverable—protecting against accidental loss, system failures, or cyber threats.",
  },
  //finance
  {
    id: "accounting-management",
    title: "Complete Financial Control, All in One Place",
    content:
      "EDUMAAT’s Accounting Management module provides institutions with a robust, integrated platform to manage income, expenses, assets, and liabilities with precision and ease.",
  },
  {
    id: "hostel-management",
    title: "Simplify Hostel Operations & Student Accommodation",
    content:
      "EDUMAAT’s Hostel Management Software offers an end-to-end solution for managing hostel facilities—covering room allocation, occupancy tracking, and fee collection with ease.",
  },
  {
    id: "transport-management",
    title: "Safe, Smart & Streamlined Student Transport",
    content:
      "EDUMAAT’s Transport Management Software simplifies the planning, monitoring, and administration of institutional transport—ensuring safety, efficiency, and accountability.",
  },
  {
    id: "canteen-management",
    title: "Efficient, Cashless & Organized Food Services",
    content:
      "EDUMAAT’s Canteen Management System streamlines food ordering, billing, inventory, and meal plans—offering a fast, secure, and convenient dining experience for students and staff.",
  },
  {
    id: "utility-management",
    title: "Track. Save. Streamline Campus Utilities.",
    content:
      "EDUMAAT’s Utility Management feature helps institutions monitor and manage essential resources like electricity, water, and internet—ensuring efficient usage and reduced costs.",
  },
  {
    id: "booking-management",
    title: "Seamless Scheduling for Campus Resources",
    content:
      "EDUMAAT’s Booking Management system allows institutions to manage and reserve campus facilities like classrooms, labs, halls, vehicles, and equipment—quickly and efficiently.",
  },
  {
    id: "communication-management",
    title:
      "Seamless Communication Powered by EDUMAAT AI. Stay Connected, Stay Informed",
    content:
      "The Communication Module in EDUMAAT empowers institutions to manage, track, and streamline all communications with students, parents, faculty, and staff — anytime, anywhere.",
  },
  {
    id: "event-management",
    title:
      "Event Management with EDUMAAT Plan Better. Engage More. Execute Flawlessly.",
    content:
      "EDUMAAT’s Event Management module offers a centralized platform for planning, organizing, and managing events of all sizes — from academic seminars to cultural fests — with ease and efficiency.",
  },
  {
    id: "complaint-and-feedback-management",
    title:
      "Complaint & Feedback Management with EDUMAAT Listen Better. Respond Faster. Improve Continuously.",
    content:
      "EDUMAAT’s Complaint and Feedback Management module empowers institutions to build a transparent and responsive environment by capturing, tracking, and resolving issues and suggestions from students, staff, and stakeholders — efficiently and effectively.",
  },
  {
    id: "visitor-gate-pass-sickroom-management",
    title:
      "Visitor, Gate Pass & Sick Management with EDUMAAT Secure Access. Smart Records. Care with Confidence.",
    content:
      "EDUMAAT’s integrated Visitor, Gate Pass, and Sick Management module ensures that campus entry, exit, and health-related incidents are monitored, recorded, and managed with precision — all in one intelligent system.",
  },
  {
    id: "library-management",
    title: "Efficient Access. Seamless Borrowing. Smarter Library Operations.",
    content:
      "EDUMAAT’s Library Management module revolutionizes the way educational institutions manage their library resources, ensuring an optimized, automated, and user-friendly experience for both staff and students.",
  },
  {
    id: "task-and-to-do-management",
    title: "Stay Organized. Be Productive. Achieve More.",
    content:
      "EDUMAAT’s Task & To-Do Management module empowers students, staff, and administrators to stay on top of their responsibilities by providing a centralized platform for task creation, tracking, and completion.",
  },
  {
    id: "custom-report-builder",
    title: "Personalized Reports for Data-Driven Success",
    content:
      "EDUMAAT’s Custom Report Builder offers educational institutions the flexibility to design reports tailored to their specific needs. Whether it’s tracking student performance, departmental progress, or financial metrics, our powerful tool makes data analysis and decision-making easier than ever.",
  },
  {
    id: "form-builder",
    title: "Custom Forms. Effortless Data Collection. Smarter Workflows.",
    content:
      "EDUMAAT’s Form Builder allows educational institutions to create and manage custom forms for a variety of needs — from student registration and feedback surveys to event participation and attendance tracking. With an intuitive interface and powerful features, EDUMAAT’s Form Builder streamlines data collection and automates workflows for increased efficiency.",
  },
  {
    id: "integration-payment-gateway-whatsapp-email",
    title:
      "Seamless Transactions. Instant Communication. Effortless Operations.",
    content:
      "EDUMAAT offers powerful integrations with popular payment gateways, WhatsApp, and email to ensure your institution can manage transactions, communicate with students, staff, and parents, and keep everything running smoothly. These integrations provide a more connected, efficient, and streamlined experience for your institution’s day-to-day operations.",
  },
  {
    id: "assignment-management",
    title: "Smart Assignments. Timely Submissions. Clear Evaluations.",
    content:
      "EDUMAAT simplifies assignment creation, distribution, and tracking with intelligent tools for both educators and students. From uploading tasks to automated deadlines and evaluation workflows, our system ensures transparency, timely submissions, and academic efficiency across all departments.",
  },
  {
    id: "notification-and-reminder-management",
    title:
      "Notification & Reminder Management – Simplifying Timely Communication Across Your Institution with EDUMAAT ERP",
    content:
      "Ensure seamless, timely, and consistent communication within your institution with EDUMAAT’s Notification & Reminder Management module. This feature enables administrators, teachers, and staff to send scheduled and real-time updates to students and parents, keeping everyone informed, organized, and aligned with institutional activities and requirements.",
  },
  {
    id: "document-management",
    title:
      "Document Management – Secure, Centralized, and Paperless with EDUMAAT ERP",
    content:
      "Streamline how your institution handles documents with EDUMAAT’s robust Document Management System (DMS). Designed to digitize and organize critical academic and administrative paperwork, this module enables institutions to securely store, retrieve, and manage documents across departments—enhancing compliance, reducing clutter, and improving access control.",
  },
];

const sptLightCardItems: SpotLightCardItems[] = [
  {
    id: "student-management",
    items: [
      {
        id: 1,
        title: "Predictive Analytics",
        content:
          "Forecast student performance, dropouts, and engagement levels.",
        points: [],
        img: studentMgmtImage_1,
        // img: sptLightTopCardImg1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Smart Alerts",
        content:
          "Real-time notifications for attendance, grades, and behavioral trends.",
        points: [],
        img: studentMgmtImage_2,
        // img: sptLightTopCardImg2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Automated Workflows",
        content:
          "Simplify admissions, fee processing, exam schedules, and more.",
        points: [],
        img: studentMgmtImage_3,
        // img: sptLightTopCardImg3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Personalized Insights",
        content:
          "Tailored dashboards and reports for students, parents, and educators.",
        points: [],
        img: studentMgmtImage_4,
        // img: sptLightRightHorizontalCard,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "attendance-management",
    items: [
      {
        id: 1,
        title: "Automated Attendance Capture",
        content: "Facial recognition, biometric, or RFID-based tracking.",
        points: [],
        img: attendanceMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Real-Time Reports",
        content: "Instant access to attendance summaries and trends.",
        points: [],
        img: attendanceMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Smart Alerts",
        content:
          "Notify students, parents, or staff of irregularities or absenteeism.",
        points: [],
        img: attendanceMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Integration-Ready",
        content:
          "Easily integrates with timetables, payroll, and academic records.",
        points: [],
        img: attendanceMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "examination-or-assessment-management",
    items: [
      {
        id: 1,
        title: "Automated Question Paper Generation",
        content:
          "AI creates balanced, randomized question papers based on syllabus, difficulty levels, and historical data. Supports various formats, including multiple-choice, short answer, and essay-based questions.",
        points: [],
        img: examAssesmentMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Exam Scheduling & Invigilation",
        content:
          "AI recommends optimal exam schedules based on resources, preventing conflicts. Integrated with digital proctoring for secure, online exams.",
        points: [],
        img: examAssesmentMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Smart Evaluation",
        content:
          "Automates grading for objective questions and assists in evaluating subjective responses.AI-driven error detection ensures grading consistency and fairness.",
        points: [],
        img: examAssesmentMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Instant Result Processing",
        content:
          "Real-time result generation with grade mapping and detailed student analytics. Automatically calculates CGPA, ranks, and other academic metrics.",
        points: [],
        img: examAssesmentMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "academic-calendar",
    items: [
      {
        id: 1,
        title: "Dynamic Calendar Creation",
        content:
          "Quickly create and customize academic calendars, including holidays, exam dates, and breaks, for different departments and campuses.",
        points: [],
        img: academicCalenderMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "AI-Driven Scheduling & Conflict Resolution",
        content:
          "Automatically resolves scheduling conflicts based on room availability, faculty schedules, and course requirements.",
        points: [],
        img: academicCalenderMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Automated Notifications & Reminders",
        content:
          "Keep students, faculty, and staff informed with automated reminders for upcoming exams, classes, and events.",
        points: [],
        img: academicCalenderMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Real-Time Updates",
        content:
          "Instant access to schedule changes and updates across all platforms (web and mobile), reducing confusion and enhancing communication.",
        points: [],
        img: academicCalenderMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 5,
        title: "System Integration",
        content:
          "Syncs with other management systems like attendance and exams, providing a unified experience.",
        points: [],
        img: academicCalenderMgmtImage_5,
        variant: "vertical",
      },
    ],
  },
  {
    id: "pta-parent-teacher-association",
    items: [
      {
        id: 1,
        title: "Instant Communication",
        content:
          "Direct messaging for quick updates between parents and teachers.",
        points: [],
        img: pta_MgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Event Management",
        content:
          "Easily schedule and send reminders for PTA meetings and school events.",
        points: [],
        img: pta_MgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Progress Monitoring",
        content: "Share real-time student reports and track academic progress.",
        points: [],
        img: pta_MgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Volunteer Coordination",
        content: "Manage parent volunteers for school events and activities.",
        points: [],
        img: pta_MgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "alumni-management",
    items: [
      {
        id: 1,
        title: "Alumni Database",
        content:
          "Maintain detailed profiles of alumni with career updates and contact information.",
        points: [],
        img: alumini_MgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Event Organization",
        content: " Plan and manage reunions, webinars, and networking events.",
        points: [],
        img: alumini_MgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Fundraising & Donations",
        content: " Simplify alumni donations and fundraising campaigns.",
        points: [],
        img: alumini_MgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Networking Opportunities",
        content:
          "Facilitate networking and mentorship between alumni and current students.",
        points: [],
        img: alumini_MgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 5,
        title: "Communication Channels",
        content:
          "Send newsletters, updates, and invitations through integrated messaging.",
        points: [],
        img: alumini_MgmtImage_5,
        variant: "vertical",
      },
    ],
  },
  {
    id: "lms-quiz-course-interactive-meeting",
    items: [
      {
        id: 1,
        title: "Course Management",
        content:
          "Easily create, organize, and manage courses with multimedia content.",
        points: [],
        img: lms_MgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Assessments & Quizzes",
        content:
          "Design and conduct quizzes, assignments, and exams with automatic grading.",
        points: [],
        img: lms_MgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Interactive Learning",
        content:
          "Enhance learning with discussion boards, video lectures, and live sessions.",
        points: [],
        img: lms_MgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Progress Tracking",
        content:
          "Monitor student progress with detailed reports and analytics.",
        points: [],
        img: lms_MgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 5,
        title: "Mobile Accessibility",
        content:
          "Access courses and materials from anywhere, anytime, via mobile and web platforms.",
        points: [],
        img: lms_MgmtImage_5,
        variant: "vertical",
      },
    ],
  },
  {
    id: "research-and-publication-management",
    items: [
      {
        id: 1,
        title: "Project & Publication Tracking",
        content: "Manage research timelines and publication workflows.",
        points: [],
        img: research_publication_MgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Collaboration Tools",
        content: " Seamless communication among researchers and reviewers.",
        points: [],
        img: research_publication_MgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Citations & References",
        content: "Automate citation generation and reference management.",
        points: [],
        img: research_publication_MgmtImage_3,
        variant: "vertical",
      },
    ],
  },
  {
    id: "student-and-staff-appraisal-management",
    items: [
      {
        id: 1,
        title: "Customizable Appraisal Forms",
        content: "Tailor evaluation criteria for students and staff.",
        points: [],
        img: s_s_appraisel_MgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Real-Time Feedback",
        content: "Provide and receive performance feedback instantly.",
        points: [],
        img: s_s_appraisel_MgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Performance Tracking",
        content: "Monitor progress with detailed reports and analytics.",
        points: [],
        img: s_s_appraisel_MgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "360-Degree Evaluation",
        content:
          "Include peer, self, and supervisor assessments for comprehensive feedback.",
        points: [],
        img: s_s_appraisel_MgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "student-and-staff-behaviour-management",
    items: [
      {
        id: 1,
        title: "Behaviour Tracking",
        content: "Record and monitor student behaviour in real-time.",
        points: [],
        img: s_s_behaviour_MgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Incident Reporting",
        content: "Easily report and categorize behavioural incidents.",
        points: [],
        img: s_s_behaviour_MgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Positive Reinforcement",
        content: "Recognize and reward positive student behaviour.",
        points: [],
        img: s_s_behaviour_MgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Customizable Alerts",
        content: "Set alerts for recurring behavioural issues or improvements.",
        points: [],
        img: s_s_behaviour_MgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "admission-management",
    items: [
      {
        id: 1,
        title: "Smart Application Screening",
        content:
          "AI algorithms automatically analyze and filter applications based on predefined eligibility criteria, saving valuable time for administrators and ensuring only qualified candidates progress to the next stage.",
        points: [],
        img: admissionMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Automated Lead Scoring",
        content:
          "Our AI engine intelligently scores and ranks inquiries and applications based on interest level, academic fit, and engagement history—empowering your admission team to prioritize high-potential leads.",
        points: [],
        img: admissionMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Predictive Analytics",
        content:
          "Forecast admission trends, seat fill rates, and program demand using historical data and AI-driven insights. Make proactive decisions to optimize intake planning and marketing efforts.",
        points: [],
        img: admissionMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Conversational AI Chatbot",
        content:
          "Integrated chatbot assists applicants 24/7 with real-time answers to queries about courses, deadlines, fees, and more—enhancing engagement and reducing workload on support staff.",
        points: [],
        img: admissionMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 5,
        title: "Personalized Communication",
        content:
          "AI-driven communication engine sends tailored emails, messages, and reminders to applicants based on their behavior, preferences, and admission stage, improving conversion rates.",
        points: [],
        img: admissionMgmtImage_5,
        variant: "vertical",
      },
      {
        id: 6,
        title: "Centralized Applicant Tracking",
        content:
          "Track every applicant’s journey in a single unified dashboard—from initial inquiry to final enrollment. Monitor status updates, documents, communications, and next actions with ease.",
        points: [],
        img: admissionMgmtImage_6,
        variant: "vertical",
      },

      {
        id: 7,
        title: "Integration with CRM & Marketing Tools",
        content:
          "Seamlessly connects with EDUMAAT’s CRM, email marketing, and third-party platforms to ensure a unified admission experience across channels.",
        points: [],
        img: admissionMgmtImage_7,
        variant: "horizontal",
        imgVariant: "right",
      },
    ],
  },
  {
    id: "staff-management",
    items: [
      {
        id: 1,
        title: "Centralized Staff Database ",
        content:
          "Maintain up-to-date digital records for all teaching and non-teaching staff, including personal details, qualifications, experience, documents, and employment history.",
        points: [],
        img: staffMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Attendance & Leave Management",
        content:
          "Track staff attendance with biometric or app-based systems. Automate leave application workflows, approvals, and enforce institutional leave policies with ease. ",
        points: [],
        img: staffMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Workload & Timetable Allocation",
        content:
          "Assign duties, class schedules, and administrative responsibilities efficiently with built-in tools that match roles with availability and skillsets.",
        points: [],
        img: staffMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Performance Tracking ",
        content:
          "Monitor staff performance using custom evaluation criteria. Manage appraisals, promotions, and feedback processes systematically. ",
        points: [],
        img: staffMgmtImage_4,
        variant: "vertical",
      },
      {
        id: 5,
        title: " Recruitment & Onboarding Support",
        content:
          "Digitize the hiring process with modules to manage job postings, applications, shortlisting, interviews, and onboarding documentation. ",
        points: [],
        img: staffMgmtImage_5,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 6,
        title: "Notifications & Reminders ",
        content:
          "Automated alerts for contract renewals, probation completions, retirement, training sessions, and performance reviews keep operations on track. ",
        points: [],
        img: staffMgmtImage_6,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 7,
        title: "Role-Based Access Control",
        content:
          "Secure sensitive staff information with customizable access permissions based on user roles and responsibilities.",
        points: [],
        img: staffMgmtImage_7,
        variant: "vertical",
      },
    ],
  },
  {
    id: "fees-management",
    items: [
      {
        id: 1,
        title: "Flexible Fee Structure Setup ",
        content:
          "Create and manage multiple fee categories, slabs, concessions, and installment plans based on course, batch, or student type. ",
        points: [],
        img: feeMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Online & Offline Payment Integration ",
        content:
          "Accept payments via multiple channels—UPI, cards, net banking, wallets, or offline modes. Seamlessly integrate with payment gateways for real-time fee processing.",
        points: [],
        img: feeMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Automated Receipt Generation ",
        content:
          "Instant generation of digital receipts with complete transaction details. Receipts are available for download and email to both students and parents. ",
        points: [],
        img: feeMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Reminders & Notifications ",
        content:
          "Automatic reminders for due dates, pending payments, and late fees via SMS, email, or app notifications—reducing defaults and follow-up time. ",
        points: [],
        img: feeMgmtImage_4,
        variant: "vertical",
      },
      {
        id: 5,
        title: "Real-Time Fee Tracking & Dashboards ",
        content:
          "Monitor collection status, outstanding dues, and financial summaries through intuitive dashboards and downloadable reports. ",
        points: [],
        img: feeMgmtImage_5,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 6,
        title: "Concessions, Scholarships & Waivers ",
        content:
          "Easily apply discounts, scholarships, and fee waivers to eligible students with full audit trails for transparency and accountability. ",
        points: [],
        img: feeMgmtImage_6,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 7,
        title: "Integration with Accounting Module ",
        content:
          "Sync fee transactions directly with EDUMAAT’s accounting system for accurate ledger updates, reconciliation, and financial reporting. ",
        points: [],
        img: feeMgmtImage_7,
        variant: "vertical",
      },
      {
        id: 8,
        title: "Secure & Role-Based Access ",
        content:
          "Ensure only authorized personnel can access and manage fee-related data through role-based permissions and secure authentication.",
        points: [],
        img: feeMgmtImage_8,
        variant: "horizontal",
        imgVariant: "right",
      },
    ],
  },
  {
    id: "payroll-management",
    items: [
      {
        id: 1,
        title: "Automated Salary Calculation ",
        content:
          "Process monthly salaries automatically based on attendance, leaves, working days, allowances, deductions, and applicable benefits—minimizing manual work and errors.",
        points: [],
        img: payrollMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Payslip Generation & Distribution ",
        content:
          "Generate detailed payslips with complete breakdowns (basic, HRA, PF, ESI, etc.) and distribute them securely via portal access, email, or SMS. ",
        points: [],
        img: payrollMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Integration with Attendance & Leave Data",
        content:
          "Link payroll with real-time attendance and leave records for accurate and fair salary disbursal. ",
        points: [],
        img: payrollMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Customizable Salary Structures",
        content:
          "Create salary templates for different roles and departments with flexible components such as incentives, arrears, and deductions. ",
        points: [],
        img: payrollMgmtImage_4,
        variant: "vertical",
      },
      {
        id: 5,
        title: "Compliance with Statutory Requirements ",
        content:
          "Automatically calculate and process PF, ESI, TDS, professional tax, and other statutory deductions. Generate reports and statutory returns as per government guidelines.",
        points: [],
        img: payrollMgmtImage_5,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 6,
        title: "Loan & Advance Management ",
        content:
          "Track staff loans, advances, and recovery schedules—automatically adjusting deductions within payroll cycles.",
        points: [],
        img: payrollMgmtImage_6,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 7,
        title: "Payroll Reports & Audits ",
        content:
          "Generate detailed payroll summaries, bank transfer statements, tax filings, and audit reports to support financial planning and HR audits. ",
        points: [],
        img: payrollMgmtImage_7,
        variant: "vertical",
      },
      {
        id: 8,
        title: "Secure Role-Based Access ",
        content:
          "Restrict payroll access to authorized HR and finance personnel to ensure data privacy and system integrity. ",
        points: [],
        img: payrollMgmtImage_8,
        variant: "horizontal",
        imgVariant: "right",
      },
    ],
  },
  {
    id: "inventory-and-asset-management",
    items: [
      {
        id: 1,
        title: "End-to-End Accounts Management",
        content:
          "Manage all accounting operations including receipts, payments, journal entries, ledgers, and financial statements in one unified platform. Maintain accuracy, transparency, and compliance with institutional financial policies.",
        points: [],
        img: inventoryAssetMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Inventory Control & Tracking",
        content:
          "Monitor stock levels, manage issue/return transactions, and maintain item-wise inventory records across departments and campuses. Enable centralized procurement and decentralized access for operational flexibility.",
        points: [],
        img: inventoryAssetMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Invoice Management & Billing Automation",
        content:
          "Generate and manage invoices for various departments—tuition, hostel, transport, and miscellaneous fees. Track pending payments, apply late fees, and automate reminders for timely collections.",
        points: [],
        img: inventoryAssetMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Multi-Campus Asset Management",
        content:
          "Maintain a centralized register of all physical and digital assets, from lab equipment to IT hardware. Track procurement, allocation, usage, maintenance, and disposal across all campuses.",
        points: [],
        img: inventoryAssetMgmtImage_4,
        variant: "vertical",
      },
      {
        id: 5,
        title: "Vendor & Purchase Order Management",
        content:
          "Raise, track, and approve purchase requests, generate POs, and maintain complete vendor records. Ensure smoother procurement cycles with proper audit trails and documentation.",
        points: [],
        img: inventoryAssetMgmtImage_5,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 6,
        title: "Customizable Reports & Audit Trails",
        content:
          "Generate real-time financial, inventory, and asset reports for internal reviews and external audits. Ensure transparency and readiness for compliance requirements.",
        points: [],
        img: inventoryAssetMgmtImage_6,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 7,
        title: "Seamless Integration with Other EDUMAAT Modules",
        content:
          "Fully integrated with Fee Management, Payroll, Procurement, and Admin modules to ensure smooth data flow and consistent information across your ERP system.",
        points: [],
        img: inventoryAssetMgmtImage_7,
        variant: "vertical",
      },
    ],
  },
  {
    id: "account-management",
    items: [
      {
        id: 1,
        title: "Ledger Management (Receipts, Payments, Income, Expenses)",
        content:
          "Easily track all financial transactions in one place, including receipts, payments, income, and expenses. Stay organized with clear, up-to-date financial records.",
        points: [],
        img: sptLightTopCardImg1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Journal Entries and Bank Reconciliation",
        content:
          "Record day-to-day transactions accurately and match them with bank statements. Quickly spot and fix any mismatches for financial accuracy.",
        points: [],
        img: sptLightTopCardImg2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Integration with Fee and Payroll Modules ",
        content:
          "Automatically sync fee collections and staff payroll with accounts. Saves time and ensures all financial data is updated instantly.",
        points: [],
        img: sptLightTopCardImg3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Trial Balance, Balance Sheet, and Profit & Loss Reports",
        content:
          "Generate key financial reports instantly. Understand your institution’s financial status at any time.",
        points: [],
        img: sptLightTopCardImg2,
        variant: "vertical",
      },
      {
        id: 5,
        title: "GST and Statutory Compliance Support",
        content:
          "Simplifies GST calculations and ensures you meet tax regulations. Helps in preparing accurate and timely statutory reports.",
        points: [],
        img: sptLightRightHorizontalCard,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "inventory-management",
    items: [
      {
        id: 1,
        title: "Item Categorization and Batch Tracking",
        content:
          "Group items by category and track them by batch for better organization. Easily monitor expiry dates, usage patterns, and stock movements.",
        points: [],
        img: sptLightTopCardImg1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Stock Level Alerts and Reorder Points",
        content:
          "Get automatic alerts when stock is low. Set reorder levels to prevent shortages and overstocking.",
        points: [],
        img: sptLightTopCardImg2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Purchase and Consumption Logs",
        content:
          "Keep a clear record of all purchases and item usage. Understand consumption trends to plan smarter procurement.",
        points: [],
        img: sptLightTopCardImg3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Vendor Management and Purchase Order Tracking",
        content:
          "Maintain vendor details and track every purchase order. Simplifies communication and ensures timely",
        points: [],
        img: sptLightTopCardImg2,
        variant: "vertical",
      },
      {
        id: 5,
        title: "Issue/Return Records and Inventory Valuation",
        content:
          "Track who issued or returned items and when. Get real-time inventory value for accurate financial planning.",
        points: [],
        img: sptLightRightHorizontalCard,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "invoice-management",
    items: [
      {
        id: 1,
        title:
          "Auto-Generated Invoices Linked to Fee, Purchase, or Payroll Transactions",
        content:
          "Invoices are created automatically based on fee collections, purchases, or salary payments. Saves time and reduces manual errors.",
        points: [],
        img: sptLightTopCardImg1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Customizable Invoice Templates and Tax Fields",
        content:
          "Design invoices to match your institution’s needs. Add or modify tax fields to stay compliant and professional.",
        points: [],
        img: sptLightTopCardImg2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Payment Tracking and Overdue Alerts",
        content:
          "Monitor invoice payments in real-time. Get automatic alerts for overdue payments to follow up on time.",
        points: [],
        img: sptLightTopCardImg3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Integration with Accounting and Finance Modules",
        content:
          "Invoices are directly synced with accounts and finance. Ensures seamless financial reporting and reconciliation.",
        points: [],
        img: sptLightTopCardImg2,
        variant: "vertical",
      },
      {
        id: 5,
        title: "Audit-Friendly Digital Records of All Invoices",
        content:
          "All invoices are stored securely in digital format. Easy to retrieve and compliant with audit requirements.",
        points: [],
        img: sptLightRightHorizontalCard,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "assets-management",
    items: [
      {
        id: 1,
        title:
          "Asset Registration and Categorization (Furniture, IT Equipment, Lab Tools, etc.)",
        content:
          "Easily register and group assets by type or department. Keeps all physical and digital assets organized and easy to track.",
        points: [],
        img: sptLightTopCardImg1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Purchase, Allocation, Maintenance, and Disposal Tracking",
        content:
          "Track the complete asset lifecycle—from purchase to disposal. Monitor who is using what and when maintenance is due.",
        points: [],
        img: sptLightTopCardImg2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Depreciation Calculation and Reporting",
        content:
          "Automatically calculate asset depreciation over time. Generate accurate reports for accounting and audits.",
        points: [],
        img: sptLightTopCardImg3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Barcode Tagging and Physical Verification",
        content:
          "Use barcodes to tag and scan assets for quick tracking. Simplifies physical audits and reduces misplacement.",
        points: [],
        img: sptLightTopCardImg2,
        variant: "vertical",
      },
      {
        id: 5,
        title: "Warranty and Service Tracking",
        content:
          "Keep records of warranties and service schedules. Get alerts before warranty expiry or maintenance due dates.",
        points: [],
        img: sptLightRightHorizontalCard,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "placement",
    items: [
      {
        id: 1,
        title: " Student Profiling & Resume Bank ",
        content:
          "Maintain centralized student profiles with academic records, skills, certifications, and project experience. Generate institution-branded resumes ready for recruiters. ",
        points: [],
        img: placementMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Placement Drive Scheduling",
        content:
          "Plan and manage on-campus or virtual recruitment drives, company presentations, and interviews with complete calendar integration and real-time notifications. ",
        points: [],
        img: placementMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Company & Job Role Management ",
        content:
          "Track recruiter details, job descriptions, eligibility criteria, and package offers in one place. Match the right students to the right opportunities.",
        points: [],
        img: placementMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Eligibility Filtering & Shortlisting ",
        content:
          "Automatically filter eligible candidates for each job profile based on academic and skill-based parameters. Share shortlisted lists with recruiters instantly. ",
        points: [],
        img: placementMgmtImage_4,
        variant: "vertical",
      },
      {
        id: 5,
        title: "Mock Tests & Interview Preparation ",
        content:
          "Integrate aptitude tests, mock interviews, and soft skill assessments to prepare students before facing recruiters. ",
        points: [],
        img: placementMgmtImage_5,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 6,
        title: "Placement Reports & Analytics ",
        content:
          "Generate real-time reports on placement statistics—student participation, job offers, company-wise selection, salary trends, and more. ",
        points: [],
        img: placementMgmtImage_6,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 7,
        title: "Offer Letter & Status Tracking",
        content:
          "Upload and track offer letters, joining status, and candidate confirmations within a unified platform. ",
        points: [],
        img: placementMgmtImage_7,
        variant: "vertical",
      },
      {
        id: 8,
        title: " Student & Recruiter Portal ",
        content:
          "Provide a self-service portal for students to apply for jobs, view schedules, and track their placement status. Recruiters can view profiles, shortlist candidates, and submit feedback. ",
        points: [],
        img: placementMgmtImage_8,
        variant: "horizontal",
        imgVariant: "right",
      },
    ],
  },
  {
    id: "edumaat-ai",
    items: [
      {
        id: 1,
        title: "AI-Powered Academic Insights",
        content:
          "Leverage AI to analyze academic performance, learning patterns, and assessment data. Identify at-risk students, recommend personalized learning paths, and support faculty with real-time academic analytics.",
        points: [],
        img: AiMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Smart Timetable & Resource Optimization",
        content:
          "Automated scheduling using AI ensures optimal utilization of classrooms, faculty, and learning resources. Predict demand patterns and avoid scheduling conflicts with data-driven precision.",
        points: [],
        img: AiMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "AI-Based Student Engagement Engine",
        content:
          "Deliver personalized notifications, learning nudges, and academic updates to students based on behavior, performance, and preferences. Improve engagement and academic outcomes with contextual communication.",
        points: [],
        img: AiMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Predictive Enrollment & Retention Modeling",
        content:
          "Use historical and behavioral data to forecast enrollment trends and dropout risks. Empower management to take proactive steps in improving student retention and optimizing program offerings.",
        points: [],
        img: AiMgmtImage_4,
        variant: "vertical",
      },
      {
        id: 5,
        title: "Conversational AI for Students & Faculty",
        content:
          "24/7 AI chatbots offer instant support on FAQs, timetables, assignments, campus policies, and more—freeing up administrative bandwidth and improving user satisfaction.",
        points: [],
        img: AiMgmtImage_5,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 6,
        title: "Automated Fee Prediction & Compliance Monitoring",
        content:
          "Predict fee payment delays and compliance gaps using historical payment behavior. Trigger timely reminders and support intervention strategies to ensure financial discipline.",
        points: [],
        img: AiMgmtImage_6,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 7,
        title: "AI-Enhanced Learning Content Recommendations",
        content:
          "Intelligently suggest relevant eLearning content, assignments, and reference materials tailored to individual student progress and learning style.",
        points: [],
        img: AiMgmtImage_7,
        variant: "vertical",
      },
      {
        id: 8,
        title: "Graduation Readiness Checks",
        content:
          "As students near graduation, the AI Assistant evaluates their academic records, ensuring that all graduation requirements are met, from credit hours to course completions. It automatically alerts students about any outstanding requirements and guides them toward completion.",
        points: [],
        img: AiMgmtImage_8,
        variant: "vertical",
      },
      {
        id: 9,
        title: "AI-Driven Career Guidance",
        content:
          "As graduation approaches, the assistant offers career counseling based on a student’s academic background, achievements, and interests. It also provides internship and job placement recommendations, directly linking students to opportunities.",
        points: [],
        img: AiMgmtImage_9,
        variant: "horizontal",
        imgVariant: "right",
      },
    ],
  },
  {
    id: "timetable-management",
    items: [
      {
        id: 1,
        title: "AI-Based Timetable Generation ",
        content:
          "Automatically generate conflict-free timetables using intelligent algorithms that factor in subject load, faculty availability, classroom capacity, and batch timings. ",
        points: [],
        img: timetableMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Custom Rules & Constraints",
        content:
          "Define custom rules like preferred teaching slots, break times, lab sessions, and faculty constraints—ensuring schedules meet institutional needs. ",
        points: [],
        img: timetableMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Real-Time Updates & Adjustments",
        content:
          "Make quick changes to schedules and notify all stakeholders instantly in case of substitutions, holidays, or special sessions. ",
        points: [],
        img: timetableMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Multi-Device Access ",
        content:
          "Students and faculty can access personalized timetables via mobile or web portals—ensuring everyone is informed and updated. ",
        points: [],
        img: timetableMgmtImage_4,
        variant: "vertical",
      },
      {
        id: 5,
        title: "Reports & Utilization Insights ",
        content:
          "Track teaching hours, room usage, and subject coverage through visual dashboards and detailed reports. ",
        points: [],
        img: timetableMgmtImage_5,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 6,
        title: "Integration with CRM & Marketing Tools",
        content:
          "Seamlessly connects with EDUMAAT’s CRM, email marketing, and third-party platforms to ensure a unified admission experience across channels.",
        points: [],
        img: timetableMgmtImage_6,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 7,
        title: "Centralized Applicant Tracking",
        content:
          "Track every applicant’s journey in a single unified dashboard—from initial inquiry to final enrollment. Monitor status updates, documents, communications, and next actions with ease.",
        points: [],
        img: timetableMgmtImage_7,
        variant: "vertical",
      },
    ],
  },
  //hr-resource
  {
    id: "job-recruitment-management",
    items: [
      {
        id: 1,
        title: "Requirement Listing",
        content: "Create and manage job role requirements across departments.",
        points: [],
        img: jobRecruitMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Approval Workflows",
        content: "Set up automated approval chains for new job requests.",
        points: [],
        img: jobRecruitMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Status Tracking",
        content:
          "Monitor open, in-progress, and filled job roles in real time.",
        points: [],
        img: jobRecruitMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Department Coordination ",
        content:
          "Align HR with academic or operational units for timely hiring.",
        points: [],
        img: jobRecruitMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "requisition-and-approval-management",
    items: [
      {
        id: 1,
        title: "Custom Workflows",
        content:
          "Define approval paths for various request types (HR, finance, academic).",
        points: [],
        img: reqApprovalMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Real-Time Tracking",
        content: "Monitor the status of requisitions at every stage.",
        points: [],
        img: reqApprovalMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Notifications & Alerts",
        content: "Instant updates for pending and completed approvals.",
        points: [],
        img: reqApprovalMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Digital Records",
        content:
          "Maintain organized logs of all approved and rejected requests.",
        points: [],
        img: reqApprovalMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "role-and-privilege-management",
    items: [
      {
        id: 1,
        title: "Role-Based Access Control",
        content:
          "Assign specific permissions to users based on roles (admin, teacher, student, etc.).",
        points: [],
        img: rolePrivilageMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Custom Privileges",
        content:
          "Create and manage granular access rights for various modules.",
        points: [],
        img: rolePrivilageMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Secure Data Handling",
        content: "Restrict sensitive information to authorized users only.",
        points: [],
        img: rolePrivilageMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Audit Logs",
        content: "Track changes and access history for accountability.",
        points: [],
        img: rolePrivilageMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "role-wise-dashboard",
    items: [
      {
        id: 1,
        title: "Customized Views",
        content:
          "Dashboards for administrators, teachers, students, parents, and staff.",
        points: [],
        img: roleDashboardMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Real-Time Data",
        content:
          "Live updates on attendance, performance, schedules, and more.",
        points: [],
        img: roleDashboardMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Quick Actions",
        content:
          "Role-specific tools for faster decision-making and task execution.",
        points: [],
        img: roleDashboardMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Analytics & Reports",
        content:
          "Visual data representations for performance tracking and insights.",
        points: [],
        img: roleDashboardMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "custom-letter-and-id-card-generation",
    items: [
      {
        id: 1,
        title: "Template-Based Generation",
        content:
          "Use pre-designed templates for offer letters, certificates, and ID cards.",
        points: [],
        img: customerLetterIDMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Auto-Fill Data",
        content: "Pull data directly from the system—no manual entry required.",
        points: [],
        img: customerLetterIDMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Custom Branding",
        content:
          "Add logos, signatures, QR codes, and institution-specific designs.",
        points: [],
        img: customerLetterIDMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Bulk Generation",
        content: "Generate documents for multiple users in a single click.",
        points: [],
        img: customerLetterIDMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "backup-restore-management",
    items: [
      {
        id: 1,
        title: "Automated Backups",
        content: "Schedule regular backups without manual effort.",
        points: [],
        img: backupRestoreMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "One-Click Restore",
        content: "Quickly restore data to a previous state when needed.",
        points: [],
        img: backupRestoreMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Cloud & On-Premise Support",
        content: "Flexible storage options based on your infrastructure.",
        points: [],
        img: backupRestoreMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Data Integrity Checks",
        content: "Ensure backups are complete and error-free.",
        points: [],
        img: backupRestoreMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  //finanace
  {
    id: "accounting-management",
    items: [
      {
        id: 1,
        title: "General Ledger",
        content: "Track all financial transactions in real time.",
        points: [],
        img: accountingMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Income & Expense Tracking",
        content: "Categorize and monitor institutional finances.",
        points: [],
        img: accountingMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Bank Reconciliation",
        content: "Match bank statements with internal records automatically.",
        points: [],
        img: accountingMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Financial Reports ",
        content: "Generate balance sheets, P&L statements, and custom reports.",
        points: [],
        img: accountingMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "hostel-management",
    items: [
      {
        id: 1,
        title: "Room Allocation",
        content:
          " Assign rooms based on gender, course, preferences, or availability.",
        points: [],
        img: hostalMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Occupancy Tracking",
        content: "Monitor who’s staying where in real time.",
        points: [],
        img: hostalMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Hostel Fee Integration",
        content:
          " Automatically link accommodation fees with the main fee system.",
        points: [],
        img: hostalMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Visitor & Leave Logs",
        content: "Track guest entries and student out-passes securely.",
        points: [],
        img: hostalMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "transport-management",
    items: [
      {
        id: 1,
        title: "Route & Stop Management",
        content: "Create and manage routes, stops, and schedules.",
        points: [],
        img: transportMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Vehicle Tracking",
        content: "Real-time GPS tracking of buses for safety and transparency.",
        points: [],
        img: transportMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Driver & Vehicle Records",
        content: "Maintain logs for licenses, insurance, and maintenance.",
        points: [],
        img: transportMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Transport Fee Integration",
        content: "Automatically calculate and link transport fees.",
        points: [],
        img: transportMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "canteen-management",
    items: [
      {
        id: 1,
        title: "Prepaid & Cashless Payments",
        content: " Integrated wallet or ID card-based payments.",
        points: [],
        img: canteenMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Meal Planning",
        content: "Manage menus, schedules, and daily meal allotments.",
        points: [],
        img: canteenMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Order & Billing System",
        content: "Quick POS-style ordering and instant billing.",
        points: [],
        img: canteenMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Inventory Control",
        content: "Track raw material usage and kitchen stock.",
        points: [],
        img: canteenMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "utility-management",
    items: [
      {
        id: 1,
        title: "Real-time tracking of utility usage",
        content: "",
        points: [],
        img: utilityMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Alerts for overconsumption",
        content: "",
        points: [],
        img: utilityMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Monthly utility billing and record-keeping",
        content: "",
        points: [],
        img: utilityMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Reports for analysis and cost control",
        content: "",
        points: [],
        img: utilityMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "booking-management",
    items: [
      {
        id: 1,
        title: "Facility Booking",
        content: "Schedule rooms, labs, sports grounds, and more.",
        points: [],
        img: bookingMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Approval Workflow",
        content: "Optional admin approval for controlled access.",
        points: [],
        img: bookingMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Conflict Detection",
        content: "Avoid double-booking with real-time availability checks.",
        points: [],
        img: bookingMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Automated Notifications",
        content: "Email/SMS alerts for booking confirmations and reminders.",
        points: [],
        img: bookingMgmtImage_4,
        variant: "horizontal",
        imgVariant: "left",
      },
    ],
  },
  {
    id: "communication-management",
    items: [
      {
        id: 1,
        title: "Multi-Channel Access",
        content: "Engage your audience effortlessly through multiple channels:",
        points: [
          "Portal: Send and view communications directly within the EDUMAAT web portal. Secure and centralized.",
          "Email: Deliver personalized messages and announcements right to the inbox. Ideal for formal updates and detailed information.",
          "SMS: Instantly reach stakeholders with time-sensitive alerts and reminders via mobile messaging.",
        ],
        img: communicationMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Smart Communication with EDUMAAT AI",
        content: "Harness the power of AI to:",
        points: [
          "Auto-generate message content based on event triggers (like absences, fees due, timetable changes).",
          "Suggest optimal send times for higher engagement.",
          "Personalize messages intelligently, using student and staff data profiles.",
          "Analyse communication effectiveness with actionable insights and engagement metrics.",
        ],
        img: communicationMgmtImage_2,
        variant: "vertical",
      },
    ],
  },
  {
    id: "event-management",
    items: [
      {
        id: 1,
        title: "Event Planning & Scheduling",
        content:
          "Create and schedule events with customizable categories like academic, cultural, sports, or administrative. Avoid conflicts with smart calendar integration.",
        points: [],
        img: eventMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Online Registrations & Approvals",
        content:
          "Allow students, staff, or external participants to register online. Set up workflows for approvals, permissions, and resource requests.",
        points: [],

        img: eventMgmtImage_2,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 3,
        title: "Automated Invitations & Communication",
        content:
          "Send invites, reminders, and updates via portal, email, or SMS. EDUMAAT AI ensures targeted messaging and optimal delivery timing.",
        points: [],
        img: eventMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Resource & Venue Management",
        content:
          "Book rooms, auditoriums, equipment, and personnel with conflict checks. Maintain a complete log of resource utilization.",
        points: [],

        img: eventMgmtImage_4,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 4,
        title: "Attendance & Feedback Collection",
        content:
          "Track participant attendance digitally and gather post-event feedback to improve future events.",
        points: [],
        img: eventMgmtImage_5,
        variant: "vertical",
      },
      {
        id: 5,
        title: "AI-Enhanced Coordination:",
        content: "",
        points: [
          "Suggest ideal dates based on academic calendar and availability",
          "Predict attendance trends based on previous events",
          "Automate post-event summaries and feedback analysis",
          "Identify high-engagement event types using participation data",
        ],
        img: eventMgmtImage_6,
        variant: "vertical",
      },
    ],
  },
  {
    id: "complaint-and-feedback-management",
    items: [
      {
        id: 1,
        title: "Easy Submission Portal",
        content:
          "Students and staff can submit complaints or feedback anytime via the EDUMAAT portal or mobile app — categorized by department, urgency, or type (academic, facility, administration, etc.).",
        points: [],
        img: complientMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Automated Acknowledgment & Tracking",
        content:
          "Each submission is acknowledged instantly and assigned a unique tracking ID. Users can monitor the resolution progress in real-time.",
        points: [],

        img: complientMgmtImage_2,
        variant: "horizontal",
        imgVariant: "left",
      },
      {
        id: 3,
        title: "Smart Routing & Escalation",
        content:
          "EDUMAAT AI automatically routes issues to the appropriate department or authority. Unresolved or overdue issues are escalated as per defined policies.",
        points: [],
        img: complientMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Feedback Surveys & Analytics",
        content:
          "Collect structured feedback through customizable surveys. AI analyzes trends, sentiment, and recurring concerns to guide institutional improvements.",
        points: [],

        img: complientMgmtImage_4,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 4,
        title: "Status Updates & Notifications",
        content:
          "Send automated updates to users via portal, email, or SMS at every stage — from acknowledgment to resolution.",
        points: [],
        img: complientMgmtImage_5,
        variant: "vertical",
      },
      {
        id: 5,
        title: "AI-Driven Responsiveness:",
        content: "",
        points: [
          "Prioritize issues based on urgency and impact",
          "Suggest template responses or solutions for common issues",
          "Generate actionable reports for management review",
          "Detect recurring patterns and recommend preventive actions",
        ],
        img: complientMgmtImage_6,
        variant: "vertical",
      },
    ],
  },
  {
    id: "visitor-gate-pass-sickroom-management",
    items: [
      {
        id: 1,
        title: "Visitor Management",
        content: "Streamline Visitor Entry & Exit",
        points: [
          "Digital Check-In/Check-Out: Capture visitor details, purpose, ID proof, and host information at the gate through digital kiosks or front desk login.",
          "Pre-Approved Visitor Passes: Allow staff or departments to pre-schedule visitor appointments with approval workflows.",
          "Real-Time Notifications: Notify hosts automatically when visitors arrive. Track visitor movement until exit.",
          "Visitor Logs & Reports: Maintain secure records of all visitors for audit, safety, and compliance.",
        ],
        img: visitorMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Gate Pass Management",
        content: "Control Movement with Accountability",
        points: [
          "Student & Staff Gate Passes: Issue digital gate passes for students or staff with details like purpose, destination, expected return time, and approval status.",
          "QR/Barcode-Based Scanning: Quick scan verification at entry/exit points ensures secure tracking and prevents misuse.",
          "Automated Alerts & Logs: Notify parents or guardians when students leave campus. Track overdue returns and generate reports.",
        ],
        img: visitorMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Sick Management",
        content: "Prioritize Health and Well-being ",
        points: [
          "Digital Sick Reporting: Allow students and staff to report illness through the portal or app, optionally attaching medical documents.",
          "Health Room Logs: Record treatment given, duration of rest, and doctor/guardian notes.",
          "Recovery Monitoring: Track return-to-class readiness and manage academic accommodations if needed.",
          "Health Data & Trends: Use AI analytics to spot common health issues or recurring symptoms — helpful for proactive care and planning.",
        ],
        img: visitorMgmtImage_3,
        variant: "vertical",
      },
    ],
  },
  {
    id: "library-management",
    items: [
      {
        id: 1,
        title: "Digital Cataloging & Search",
        content:
          "Organize books, journals, e-resources, and multimedia content into a centralized, easily searchable catalog. Students and staff can search by title, author, genre, or keywords.",
        points: [],
        img: libraryMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Online Book Borrowing & Renewals",
        content:
          "Students can view available titles, borrow, and renew books through the EDUMAAT portal or app, simplifying the borrowing process and reducing queues.",
        points: [],
        img: libraryMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Real-Time Availability Tracking",
        content:
          "Monitor the availability of resources in real-time. Students are notified instantly when a book becomes available or when it's overdue.",
        points: [],
        img: libraryMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Automated Due Date Reminders & Notifications",
        content:
          "Send automated reminders for due dates and overdue books via portal, email, or SMS to reduce delays and improve return rates.",
        points: [],
        img: libraryMgmtImage_4,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 5,
        title: "Fine Management",
        content:
          "Automatically calculate and manage fines for overdue books. Collect fines digitally and track payments seamlessly.",
        points: [],
        img: libraryMgmtImage_5,
        variant: "vertical",
      },
      {
        id: 6,
        title: "Reservation System",
        content:
          "Enable students to reserve books or resources that are currently unavailable. EDUMAAT AI ensures the reservation queue is handled efficiently.",
        points: [],
        img: libraryMgmtImage_6,
        variant: "vertical",
      },
      {
        id: 7,
        title: "AI-Driven Efficiency:",
        content: "",
        points: [
          "Smart Recommendations: Based on reading history and preferences, EDUMAAT AI recommends books and resources that align with the student’s academic needs or personal interests.",
          "Resource Utilization Analytics: Track the most borrowed books and resources. Use AI insights to optimize library acquisitions, ensuring relevance and demand.",
          "Predictive Trends & Stock Management: Predict future borrowing trends and recommend when to restock or purchase additional copies based on demand patterns.",
        ],
        img: libraryMgmtImage_7,
        variant: "vertical",
      },
    ],
  },
  {
    id: "task-and-to-do-management",
    items: [
      {
        id: 1,
        title: "Task Creation & Assignment",
        content:
          "Effortlessly create tasks, assign them to students, staff, or departments, and set deadlines. Customize task categories (academic, administrative, events, etc.) for easy organization.",
        points: [],
        img: taskTodoMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Priority Setting & Deadlines",
        content:
          "Set priority levels for each task and establish clear deadlines. EDUMAAT helps track high-priority tasks to ensure they are completed on time.",
        points: [],
        img: taskTodoMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Progress Tracking & Notifications",
        content:
          "Real-time updates on task completion status. Receive automated notifications and reminders about approaching deadlines or overdue tasks.",
        points: [],
        img: taskTodoMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Collaboration & Comments",
        content:
          "Collaborate on tasks with built-in comment threads. Share updates, ask questions, or provide feedback directly within the task interface.",
        points: [],
        img: taskTodoMgmtImage_4,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 5,
        title: "Task History & Analytics",
        content:
          "Maintain an archive of completed tasks for reference. Use AI-powered analytics to review productivity trends, identify bottlenecks, and improve future task management.",
        points: [],
        img: taskTodoMgmtImage_5,
        variant: "vertical",
      },
      {
        id: 6,
        title: "AI-Powered Productivity:",
        content: "",
        points: [
          "Smart Prioritization: EDUMAAT AI prioritizes tasks based on deadlines, urgency, and historical trends, ensuring that the most important tasks are addressed first.",
          "Task Recommendations: Based on workload patterns, EDUMAAT suggests the next best tasks to focus on, helping users stay organized without getting overwhelmed.",
          "Automated Alerts & Follow-Ups: Receive smart alerts for tasks at risk of delay, enabling proactive follow-up and task adjustments.",
          "Time Optimization Insights: Get insights into how time is being spent on tasks and identify opportunities for optimization and efficiency.",
        ],
        img: taskTodoMgmtImage_6,
        variant: "vertical",
      },
    ],
  },
  {
    id: "custom-report-builder",
    items: [
      {
        id: 1,
        title: "User-Friendly Interface",
        content:
          "Easily create custom reports with an intuitive drag-and-drop interface. Select from a variety of data fields to generate reports that fit your exact requirements.",
        points: [],
        img: reportBuilderMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Dynamic Filters & Sorting",
        content:
          "Refine data with advanced filters for precise results. Sort data by date, category, performance metrics, or any custom criteria for granular analysis.",
        points: [],
        img: reportBuilderMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Visual Data Representation",
        content:
          "Present your findings with clear, interactive visualizations — including pie charts, bar graphs, line charts, and tables — to make data easier to interpret.",
        points: [],
        img: reportBuilderMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Pre-built Templates",
        content:
          "Utilize a library of pre-built report templates for common use cases like student grades, attendance tracking, financial statements, and resource usage.",
        points: [],
        img: reportBuilderMgmtImage_4,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 5,
        title: "Real-Time Data Access",
        content:
          "Get up-to-date reports with real-time data, ensuring that you are always working with the most current and relevant information.",
        points: [],
        img: reportBuilderMgmtImage_5,
        variant: "vertical",
      },
      {
        id: 6,
        title: "Scheduled Reports",
        content:
          "Set up automatic scheduling for recurring reports. Whether daily, weekly, or monthly, your reports will be generated and delivered on time without the need for manual intervention.",
        points: [],
        img: reportBuilderMgmtImage_6,
        variant: "vertical",
      },
      {
        id: 7,
        title: "Export and Share",
        content:
          "Export your custom reports in various formats (PDF, Excel, CSV, Word) for easy sharing and offline use, making collaboration seamless.",
        points: [],
        img: reportBuilderMgmtImage_7,
        variant: "vertical",
      },
      {
        id: 8,
        title: "AI-Powered Features:",
        content: "",
        points: [
          "Predictive Insights: Leverage EDUMAAT’s AI capabilities to identify trends and predict future outcomes, such as student performance or resource demand, based on historical data.",
          "Anomaly Detection: Automatically detect any irregularities or outliers in the data, such as unexpected drops in attendance or discrepancies in grades, ensuring that important issues don’t go unnoticed.",
          "Smart Recommendations: Based on your reporting history, EDUMAAT AI will suggest relevant data points or report structures, saving time and providing more targeted insights.",
        ],
        img: reportBuilderMgmtImage_8,
        variant: "vertical",
      },
    ],
  },
  {
    id: "form-builder",
    items: [
      {
        id: 1,
        title: "Drag-and-Drop Form Creation",
        content:
          "Build forms quickly with a user-friendly drag-and-drop interface. Add a wide range of fields such as text boxes, checkboxes, dropdowns, date pickers, and file uploads without any coding required.",
        points: [],
        img: formMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Customizable Field Options",
        content:
          "Customize form fields to suit your specific requirements. Set mandatory fields, apply conditional logic, and configure response types to ensure accurate data collection.",
        points: [],
        img: formMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Pre-Built Templates",
        content:
          "Choose from a variety of pre-built templates for common use cases like student admission, event registration, feedback surveys, and more. Save time with ready-to-use designs.",
        points: [],
        img: formMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Smart Data Validation",
        content:
          "Ensure accurate submissions with built-in data validation rules, such as email format, phone number verification, and minimum/maximum input restrictions.",
        points: [],
        img: formMgmtImage_4,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 5,
        title: "Conditional Logic",
        content:
          "Apply conditional logic to dynamically show or hide fields based on user responses. Tailor the form experience for each individual user, making it more engaging and relevant.",
        points: [],
        img: formMgmtImage_5,
        variant: "vertical",
      },
      {
        id: 6,
        title: "Multi-Page Forms",
        content:
          "Create multi-step forms to break down lengthy forms into manageable sections, improving the user experience and completion rates.",
        points: [],
        img: formMgmtImage_6,
        variant: "vertical",
      },
      {
        id: 7,
        title: "Automatic Submission Handling",
        content:
          "Set up automatic actions once a form is submitted, such as sending confirmation emails, notifying administrators, or triggering approval workflows.",
        points: [],
        img: formMgmtImage_7,
        variant: "vertical",
      },
      {
        id: 8,
        title: "AI-Powered Features:",
        content: "",
        points: [
          "Response Analysis: Use EDUMAAT’s AI to automatically analyze form responses, identify trends, and generate insights from collected data, saving you time on manual data processing.",
          "Automated Data Categorization: EDUMAAT AI categorizes responses into relevant groups, allowing for easy tracking and reporting based on submission types or topics.",
          "Smart Notifications: Set up intelligent notifications based on form responses. For example, alert administrators if a high-priority form is submitted or notify students when their registration form has been approved.",
        ],
        img: formMgmtImage_8,
        variant: "vertical",
      },
    ],
  },
  {
    id: "integration-payment-gateway-whatsapp-email",
    items: [
      {
        id: 1,
        title: "Multiple Payment Methods",
        content:
          "EDUMAAT integrates with popular payment gateways to support a wide range of payment options, including credit/debit cards, net banking, UPI, and mobile wallets. Ensure convenient, secure payment methods for students and parents.",
        points: [],
        img: IntegrationMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Real-Time Payment Updates",
        content:
          "Payments are automatically recorded in the system, and students and administrators receive real-time notifications confirming successful transactions.",
        points: [],
        img: IntegrationMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Automated Fee Collection",
        content:
          "Set up automated fee reminders, late payment notifications, and receipts. The payment gateway integration ensures fee management is hassle-free for both students and staff.",
        points: [],
        img: IntegrationMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Secure & Compliant",
        content:
          "Transactions are securely processed with encryption, ensuring compliance with data protection regulations (such as GDPR, PCI-DSS).",
        points: [],
        img: IntegrationMgmtImage_4,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 5,
        title: "Send Alerts & Notifications",
        content:
          "Use WhatsApp to send instant notifications about important events, assignments, fee reminders, exam schedules, or class cancellations to students, parents, and staff.",
        points: [],
        img: IntegrationMgmtImage_5,
        variant: "vertical",
      },
      {
        id: 6,
        title: "Two-Way Communication",
        content:
          "Enable two-way communication with students and parents via WhatsApp. Respond to queries, provide updates, or share critical information in real-time.",
        points: [],
        img: IntegrationMgmtImage_6,
        variant: "vertical",
      },
      {
        id: 7,
        title: "Automated Messaging",
        content:
          "Automate WhatsApp messages for routine updates such as reminders, event invitations, attendance alerts, or exam results. Customize messages based on user preferences.",
        points: [],
        img: IntegrationMgmtImage_7,
        variant: "vertical",
      },
      {
        id: 8,
        title: "Broadcast & Group Messaging",
        content:
          "Create and manage WhatsApp groups for specific departments, classes, or events. Broadcast messages to large groups instantly, ensuring everyone is on the same page.",
        points: [],
        img: IntegrationMgmtImage_8,
        variant: "vertical",
      },
      {
        id: 9,
        title: "Efficient Communication. Professional Correspondence.",
        content: "",
        points: [
          "Customizable Email Templates: Create and use pre-designed email templates for various use cases — admission updates, fee reminders, event invitations, attendance updates, and more.",
          "Bulk Email Communication: Send bulk emails to students, staff, and parents with just a few clicks. Tailor the email content based on user categories, such as specific departments or grade levels.",
          "Automatic Email Triggers: Set up email triggers for important actions such as new admission approvals, fee payments, or assignment submissions. Ensure timely notifications with minimal effort.",
          "Email Analytics: Track open rates, delivery status, and click-through rates for sent emails. Use this data to measure communication effectiveness and improve engagement.",
        ],
        img: IntegrationMgmtImage_9,
        variant: "vertical",
      },
    ],
  },
  {
    id: "assignment-management",
    items: [
      {
        id: 1,
        title: "Centralized Assignment Dashboard",
        content:
          "Manage assignments across all classes and subjects.\nFaculty can create, assign, and monitor submissions.\nAll from one easy-to-use dashboard.",
        points: [],
        img: assignmentMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Timely Notifications & Reminders",
        content:
          "Students get instant alerts for deadlines and updates.\nReduces missed submissions and last-minute rushes.\nKeeps everyone informed and on track.",
        points: [],
        img: assignmentMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Automated Submission & Evaluation",
        content:
          "Students submit work digitally with ease.\nFaculty can review, grade, and give feedback online.\nSpeeds up the entire evaluation process.",
        points: [],
        img: assignmentMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Enhanced Academic Transparency",
        content:
          "Students and parents can track progress in real-time.\nView grades, feedback, and history of submissions.\nBuilds trust and improves accountability.",
        points: [],
        img: assignmentMgmtImage_4,
        variant: "horizontal",
        imgVariant: "right",
      },
    ],
  },
  {
    id: "notification-and-reminder-management",
    items: [
      {
        id: 1,
        title: "Multi-Channel Notifications",
        content:
          "Send alerts and updates through SMS, email, and in-app messages. Reach every stakeholder through their preferred communication channel.",
        points: [],
        img: notificationRemainderMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Custom Reminder Scheduling",
        content:
          "Set up automated reminders for important academic and administrative events like exam dates, fee dues, assignment deadlines, and meetings—reducing follow-up overhead.",
        points: [],
        img: notificationRemainderMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Role-Based Communication",
        content:
          "Deliver personalized messages based on user roles (student, parent, faculty, staff), ensuring relevance and clarity in every communication.",
        points: [],
        img: notificationRemainderMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Centralized Notification Dashboard",
        content:
          "Monitor and manage all notifications from a single interface. Track delivery status, scheduled messages, and communication history in real-time.",
        points: [],
        img: notificationRemainderMgmtImage_4,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 5,
        title: "Event & Calendar Integration",
        content:
          "Link reminders to the academic calendar, holidays, events, and schedules to keep students and staff always updated and prepared.",
        points: [],
        img: notificationRemainderMgmtImage_5,
        variant: "vertical",
      },
      {
        id: 6,
        title: "Integrated with Core Modules",
        content:
          "Works in sync with academic, finance, examination, and attendance modules—automatically triggering alerts for key milestones and actions.",
        points: [],
        img: notificationRemainderMgmtImage_6,
        variant: "vertical",
      },
      {
        id: 7,
        title: "Acknowledgment & Read Status Tracking",
        content:
          "Get visibility into whether notifications are viewed or acknowledged—helping institutions follow up and ensure compliance when needed.",
        points: [],
        img: notificationRemainderMgmtImage_7,
        variant: "vertical",
      },
    ],
  },
  {
    id: "document-management",
    items: [
      {
        id: 1,
        title: "Centralized Document Repository",
        content:
          "Maintain a structured digital archive for all institution-related documents including student records, faculty files, policies, circulars, and reports—accessible anytime, from anywhere.",
        points: [],
        img: documentMgmtImage_1,
        variant: "vertical",
      },
      {
        id: 2,
        title: "Role-Based Access Control",
        content:
          "Ensure document security with controlled access based on user roles and permissions. Safeguard sensitive information while enabling smooth collaboration.",
        points: [],
        img: documentMgmtImage_2,
        variant: "vertical",
      },
      {
        id: 3,
        title: "Multi-Format Support",
        content:
          "Upload, manage, and view documents in multiple formats such as PDF, Word, Excel, images, and more—making it easy to handle diverse file types.",
        points: [],
        img: documentMgmtImage_3,
        variant: "vertical",
      },
      {
        id: 4,
        title: "Advanced Search & Tagging",
        content:
          "Quickly locate documents with intelligent search filters, tags, categories, and metadata—eliminating time wasted in manual tracking.",
        points: [],
        img: documentMgmtImage_4,
        variant: "horizontal",
        imgVariant: "right",
      },
      {
        id: 5,
        title: "Version Control & Audit Trail",
        content:
          "Track edits and updates with version history and audit logs. Maintain document integrity while staying compliant with institutional policies.",
        points: [],
        img: documentMgmtImage_5,
        variant: "vertical",
      },
      {
        id: 6,
        title: "Upload & Share with Ease",
        content:
          "Easily upload documents through drag-and-drop or file picker. Share documents with selected users or groups securely within the platform.",
        points: [],
        img: documentMgmtImage_6,
        variant: "vertical",
      },
      {
        id: 7,
        title: "Seamless Integration with Modules",
        content:
          "Integrated with key EDUMAAT modules like Admissions, HR, Finance, and Academics—automatically attach and retrieve related documents as part of core workflows.",
        points: [],
        img: documentMgmtImage_7,
        variant: "vertical",
      },
      {
        id: 8,
        title: "Custom Folder Structures & Templates",
        content:
          "Organize files with customizable folder hierarchies and document templates to match your institution’s unique structure and naming conventions.",
        points: [],
        img: documentMgmtImage_8,
        variant: "vertical",
      },
    ],
  },
];

const benefitsToYourInstitutionCardItems = [
  {
    id: "student-management",
    items: [
      {
        title: "Data-Driven Decisions",
        img: studentMgmtBenefiteImage_1,
      },
      {
        title: "Enhanced Efficiency",
        img: studentMgmtBenefiteImage_2,
      },
      {
        title: "Student-Centric Approach",
        img: studentMgmtBenefiteImage_3,
      },
    ],
  },
  {
    id: "attendance-management",
    items: [
      {
        title: "Zero Manual Errors",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Time-Saving",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Proactive Monitoring",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "examination-or-assessment-management",
    items: [
      {
        title: "Time-Saving",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Accurate & Fair",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Data-Driven Decisions",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Scalable",
        img: benefitsToYourInstitutionCardImage5,
      },
    ],
  },
  {
    id: "academic-calendar",
    items: [
      {
        title: "Save Time",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Enhanced Communication",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Simplified Planning",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "pta-parent-teacher-association",
    items: [
      {
        title: "Better Engagement",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Efficient Communication",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Streamlined Operations",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "alumni-management",
    items: [
      {
        title: "Stronger Connections",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Networking Opportunities",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Fundraising Support",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "lms-quiz-course-interactive-meeting",
    items: [
      {
        title: "Engaging Learning Experience",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Efficient Administration",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Data-Driven Insights",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "research-and-publication-management",
    items: [
      {
        title: "Efficient Process",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Collaboration Made Easy",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Quality Control",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "student-and-staff-appraisal-management",
    items: [
      {
        title: "Improved Feedback",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Better Tracking",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Streamlined Process",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "student-and-staff-behaviour-management",
    items: [
      {
        title: "Improved Student Discipline",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Faster Interventions",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Supportive Environment",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "admission-management",
    items: [
      {
        title: "Reduced Manual Effort & Human Error",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Faster Admissions with Higher Conversion Rates",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Data-Driven Decision Making",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Improved Applicant Engagement",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Scalable & Customizable to Your Policies",
        img: benefitsToYourInstitutionCardImage5,
      },
    ],
  },
  {
    id: "staff-management",
    items: [
      {
        title: "Improved Operational Efficiency",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Centralized HR Data Management",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Better Compliance and Documentation",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Enhanced Transparency and Accountability ",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Reduced Administrative Burden ",
        img: benefitsToYourInstitutionCardImage5,
      },
    ],
  },
  {
    id: "fees-management",
    items: [
      {
        title: "Reduced Manual Errors ",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Improved Fee Recovery Rates ",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Transparent Communication with Students & Parents",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Simplified Financial Audits",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Complete Control Over Fee Policies & Adjustments ",
        img: benefitsToYourInstitutionCardImage5,
      },
    ],
  },
  {
    id: "payroll-management",
    items: [
      {
        title: "Accurate & Timely Salary Processing ",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Reduced Administrative Workload ",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: " Improved Staff Satisfaction ",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Full Statutory Compliance ",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Transparent & Auditable Payroll Records",
        img: benefitsToYourInstitutionCardImage5,
      },
    ],
  },
  {
    id: "inventory-and-asset-management",
    items: [
      {
        title: "Transparent and Error-Free Accounting",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Real-Time Inventory & Asset Visibility",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Automated Invoicing and Reduced Manual Workload",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Improved Budgeting and Financial Control",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Enhanced Compliance and Audit Readiness",
        img: benefitsToYourInstitutionCardImage5,
      },
      {
        title: "Scalable for Multi-Campus and Group Institutions",
        img: benefitsToYourInstitutionCardImage1,
      },
    ],
  },
  {
    id: "account-management",
    items: [
      {
        title: "Accurate and real-time financial tracking ",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Reduced dependency on third-party accounting tools ",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Streamlined audit and compliance readiness ",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "inventory-management",
    items: [
      {
        title: "Minimized inventory loss and misuse",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Improved budgeting and stock planning ",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Full visibility into institutional resources ",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "invoice-management",
    items: [
      {
        title: "Professional, consistent invoicing ",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Faster collections and reduced errors ",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Better financial reporting and follow-ups",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "assets-management",
    items: [
      {
        title: "Prolonged asset life through planned maintenance ",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Simplified audits and depreciation management ",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Prevention of asset misuse or misplacement ",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "placement",
    items: [
      {
        title: "Organized & Transparent Placement Process",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Enhanced Student Preparation & Visibility ",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Stronger Industry Engagement",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Instant Reporting for Accreditation & Ranking ",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Increased Placement Rate & Employer Satisfaction ",
        img: benefitsToYourInstitutionCardImage5,
      },
    ],
  },
  {
    id: "edumaat-ai",
    items: [
      {
        title: "Data-Backed Decision-Making Across Departments",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Enhanced Operational Efficiency Through Automation",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Increased Student Satisfaction and Success",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Scalable Intelligence for Growing Institutions",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Reduced Manual Workload and Administrative Bottlenecks",
        img: benefitsToYourInstitutionCardImage5,
      },
      {
        title: "Fully Customizable to Your Academic Policies and Goals",
        img: benefitsToYourInstitutionCardImage1,
      },
    ],
  },
  {
    id: "timetable-management",
    items: [
      {
        title: "Eliminates manual scheduling errors",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Saves time and administrative effort ",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Ensures balanced teaching loads ",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Enhances punctuality and planning ",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Supports academic coordination at scale ",
        img: benefitsToYourInstitutionCardImage5,
      },
    ],
  },
  //hr-resource
  {
    id: "job-recruitment-management",
    items: [
      {
        title: "Better Visibility",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Faster Approvals",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Streamlined Hiring",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "requisition-and-approval-management",
    items: [
      {
        title: "Faster Decision-Making",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Transparency",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Reduced Paperwork",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "role-and-privilege-management",
    items: [
      {
        title: "Enhanced Security ",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Operational Clarity",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Scalable Management",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "role-wise-dashboard",
    items: [
      {
        title: "Improved Efficiency",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Better Decision-Making",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "User-Friendly Interface",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "custom-letter-and-id-card-generation",
    items: [
      {
        title: "Time-Saving",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Professional Output",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Error-Free",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "backup-restore-management",
    items: [
      {
        title: "Data Protection",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Disaster Recovery",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Peace of Mind",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  //finance
  {
    id: "accounting-management",
    items: [
      {
        title: "Centralized Financial Data",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Error-Free Accounting",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Regulatory Compliance",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "hostel-management",
    items: [
      {
        title: "Efficient Space Utilization",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Better Transparency",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Secure Environment",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "transport-management",
    items: [
      {
        title: "Improved Safety",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Operational Efficiency",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Clear Communication",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "canteen-management",
    items: [
      {
        title: "Fast Service",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Cost Monitoring",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Transparency",
        img: benefitsToYourInstitutionCardImage3,
      },
    ],
  },
  {
    id: "utility-management",
    items: [
      {
        title: "Lower utility expenses",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Prevent wastage",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Support sustainability efforts",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Improve operational efficiency",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
  {
    id: "booking-management",
    items: [
      {
        title: "Optimized Resource Use",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Time-Saving & Transparent Process",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Centralized Booking Records",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Reduced Manual Coordination",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
  //communication
  {
    id: "communication-management",
    items: [
      {
        title: "Automated and consistent communication flow",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Reduced manual workload for administrative staff",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Enhanced transparency between institution and stakeholders",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Real-time delivery and read tracking",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Custom templates for frequently used messages",
        img: benefitsToYourInstitutionCardImage5,
      },
    ],
  },
  {
    id: "event-management",
    items: [
      {
        title: "Streamlined planning and execution",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Higher student and staff engagement",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Real-time tracking and data-backed decisions",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Reduced overhead for event organizers",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
  {
    id: "complaint-and-feedback-management",
    items: [
      {
        title: "Greater transparency and accountability",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Improved student and staff satisfaction",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Faster issue resolution",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Data-backed improvements to campus services",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
  {
    id: "visitor-gate-pass-sickroom-management",
    items: [
      {
        title: "Predictive alerts for overcrowding or frequent sick cases",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Smart escalation of visitor or gate pass violations",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title:
          "Secure and auditable logs of all movement and medical incidents",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Real-time dashboards for security and health staff",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
  {
    id: "library-management",
    items: [
      {
        title: "Streamlined library operations with reduced manual work",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Improved access and engagement for students and faculty",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Enhanced resource management and inventory tracking",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title:
          "Reduced overhead through automated fine calculation and notification systems",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
  {
    id: "task-and-to-do-management",
    items: [
      {
        title:
          "Enhanced organization and productivity for students, faculty, and staff",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Better task tracking and accountability",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Reduced task overload through smart prioritization",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title:
          "Increased collaboration and communication across teams or departments",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title:
          "Insightful data on task completion trends and workload management",
        img: benefitsToYourInstitutionCardImage5,
      },
    ],
  },
  {
    id: "custom-report-builder",
    items: [
      {
        title: "Tailored Data",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Time Efficiency",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Enhanced Decision-Making",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Collaboration Ready",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
  {
    id: "form-builder",
    items: [
      {
        title: "Simplified Data Collection",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Improved Workflow Automation",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Increased Accuracy",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Enhanced Reporting",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Flexible & Scalable",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
  {
    id: "integration-payment-gateway-whatsapp-email",
    items: [
      {
        title: "Convenience & Speed",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Improved Workflow Automation",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Enhanced Transaction Security",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Efficient Administration",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Centralized Communication",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
  {
    id: "assignment-management",
    items: [
      {
        title: "Streamlined Submission Process",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Real-Time Progress Tracking",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Automated Grading & Feedback",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Improved Student Accountability",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Centralized Assignment Repository",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
  {
    id: "notification-and-reminder-management",
    items: [
      {
        title: "Timely Communication with All Stakeholders",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Reduced Manual Follow-Up for Admin Staff",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Improved Student & Parent Awareness",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Streamlined Coordination of Academic & Admin Events",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Consistent and Professional Messaging Framework",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
  {
    id: "document-management",
    items: [
      {
        title: "Reduces Paper Usage and Storage Hassles",
        img: benefitsToYourInstitutionCardImage4,
      },
      {
        title: "Enhances Security and Access Control",
        img: benefitsToYourInstitutionCardImage1,
      },
      {
        title: "Improves Document Retrieval Speed",
        img: benefitsToYourInstitutionCardImage3,
      },
      {
        title: "Supports Digital Compliance and Audits",
        img: benefitsToYourInstitutionCardImage2,
      },
      {
        title: "Enables Collaboration Without Risk",
        img: benefitsToYourInstitutionCardImage2,
      },
    ],
  },
];

const bannerContent = [
  {
    id: "academic",
    title: "Edumaat for Academic & Learning Management ",
    content:
      "Streamline curriculum, assessments, and student progress tracking with an intelligent platform built for academic success and learning continuity.",
    img: sptHeaderImg_1,
  },
  {
    id: "human-resource-administration",
    title: "Edumaat for Human Resource & Administration",
    content:
      "Automate staff lifecycle, attendance, and institutional administration to build a well-organized and performance-driven educational environment.",
    img: sptHeaderImg_2,
  },
  {
    id: "finance",
    title: "Edumaat for Finance & Infrastructure Management",
    content:
      "Gain full control over fees, budgeting, and asset management to ensure financial stability and sustainable infrastructure growth.",
    img: sptHeaderImg_3,
  },
  {
    id: "communication",
    title: "Edumaat for Communication & Engagement",
    content:
      "Enhance collaboration across students, faculty, and parents through real-time communication and centralized engagement tools.",
    img: sptHeaderImg_4,
  },
  {
    id: "ai-automation",
    title: "Tools, Customization & Integration",
    content:
      "Leverage modular tools that integrate with your ecosystem and adapt to your institution’s unique operational needs.",
    img: sptHeaderImg_5,
  },
];

const whyChooseEdumaatContent: whyChooseEdumaatContent[] = [
  {
    id: "student-management",
    title: "Transform Student Management with AI",
    content:
      "EDUMAAT  AI makes student management easier and smarter. It can track attendance, help with grading, and give insights into student progress. This saves time for teachers and helps students learn better. With AI, schools can run more smoothly and support every student’s success.",
    buttonText:
      "Experience the future of education with EDUMAAT’s AI-powered platform.",
  },
  {
    id: "attendance-management",
    title: "Automate Attendance the Smart Way",
    content:
      "EDUMAAT AI makes taking attendance fast and easy. It can use face recognition or smart systems to track who is present, saving teachers time. It also keeps accurate records and can send alerts if a student is absent. With AI, attendance is simple, smart, and reliable.",
    buttonText: "Upgrade to intelligent attendance management with EDUMAAT.",
  },
  {
    id: "examination-or-assessment-management",
    title: "Start Smarter Assessments Today",
    content:
      "EDUMAAT  AI helps create smart and flexible timetables. It can quickly plan classes based on teacher availability, room schedules, and student needs. This reduces errors, saves time, and ensures the best use of resources. With AI, timetable management becomes faster and more efficient.",
    buttonText:
      "Enhance your institution’s exam processes with EDUMAAT’s AI-powered system, designed to save time, improve accuracy, and boost student success.",
  },
  {
    id: "academic-calendar",
    title: "Start Simplifying Your Scheduling",
    content:
      "EDUMAAT AI helps create and manage academic calendars effortlessly. It can automatically schedule holidays, exams, and important events, ensuring no conflicts. With AI, academic calendars stay organized and up-to-date, saving time and reducing errors.",
    buttonText:
      "Transform your academic calendar management with EDUMAAT’s AI-powered system for smarter, more efficient scheduling.",
  },
  {
    id: "pta-parent-teacher-association",
    title: "Get Started Today",
    content:
      "EDUMAAT AI streamlines communication and collaboration between parents and teachers. It can schedule meetings, share updates, and track participation. With AI, the PTA becomes more efficient, helping foster stronger connections and support for student success.",
    buttonText:
      "Enhance parent-teacher collaboration with EDUMAAT. Simplify communication, track progress, and boost student success.",
  },
  {
    id: "alumni-management",
    title: "Strengthen Your Alumni Network Today",
    content:
      "AI makes alumni management easier and more effective. It can keep records updated, track engagement, and personalize communication. AI also helps organize events and gather feedback. With AI, staying connected with alumni becomes simple, organized, and impactful.",
    buttonText:
      "Build lasting relationships and support your alumni community with EDUMAAT’s Alumni Management Software.",
  },
  {
    id: "lms-quiz-course-interactive-meeting",
    title: "Take Your Learning Experience to the Next Level",
    content:
      "AI enhances LMS by making learning more engaging and personalized. It can create smart quizzes, recommend courses, and support interactive meetings. Students get tailored content, and teachers save time. With AI, online learning becomes more effective and interactive.",
    buttonText:
      "Enhance educational delivery and student success with EDUMAAT’s Learning Management Software.",
  },
  {
    id: "research-and-publication-management",
    title: "Start Managing Your Research Better",
    content:
      "AI streamlines research and publication by helping with literature reviews, detecting plagiarism, and organizing references. It can also suggest journals for submission and track publication progress. With AI, managing research becomes faster, more accurate, and less stressful.",
    buttonText: "Simplify your research and publication process with EDUMAAT.",
  },
  {
    id: "student-and-staff-appraisal-management",
    title: "Optimize Appraisals Today",
    content:
      "EDUMAAT AI makes appraisals easier and more objective. It can track performance, give data-driven feedback, and highlight areas for improvement. For both students and staff, AI ensures fair, consistent, and efficient evaluations that support growth and development.",
    buttonText:
      "Make the appraisal process easier and more effective with EDUMAAT’s software.",
  },
  {
    id: "student-and-staff-behaviour-management",
    title: "Start Managing Behaviour Effectively",
    content:
      "EDUMAAT AI helps monitor and manage behaviour effectively. It can track patterns, send alerts for unusual actions, and support early intervention. With AI, schools can promote a positive environment, encourage good behaviour, and respond quickly to issues.",
    buttonText:
      "Streamline student behaviour management with EDUMAAT’s software.",
  },
  {
    id: "admission-management",
    title: "Why Choose EDUMAAT ERP’s AI Admission System? ",
    content:
      "With EDUMAAT, institutions gain more than just automation—they gain a strategic partner in enrollment success. Our AI-powered admission system brings intelligence, efficiency, and personalization to the forefront of your student recruitment strategy. ",
    buttonText:
      "Let EDUMAAT simplify your admissions and amplify your success. ",
  },
  {
    id: "staff-management",
    title: "Why EDUMAAT’s Staff Management System? ",
    content:
      "EDUMAAT’s ERP platform brings structure, clarity, and control to your institution’s staff management processes. Whether managing a small faculty or a large campus workforce, our system ensures that your HR operations are seamless, compliant, and aligned with institutional goals. ",
    buttonText:
      "Manage your people better—with EDUMAAT, it’s simple, reliable, and efficient.",
  },
  {
    id: "fees-management",
    title: "Why Choose EDUMAAT’s Fees Management System? ",
    content:
      "Managing institutional finances shouldn't be a burden. EDUMAAT delivers a smart, scalable, and secure Fees Management solution that supports your operational needs while improving the fee payment experience for everyone involved.  ",
    buttonText:
      "Digitize your fee process with EDUMAAT—and bring clarity, control, and convenience to your institution’s finances. ",
  },
  {
    id: "payroll-management",
    title: "Why Choose EDUMAAT’s Payroll Management System?",
    content:
      "Payroll is more than just salary—it’s about trust, accuracy, and compliance. EDUMAAT’s Payroll Management System gives your institution the tools to handle every aspect of payroll effortlessly, while ensuring employees are paid correctly and on time, every time.",
    buttonText:
      "Empower your HR team. Delight your staff. Simplify payroll with EDUMAAT. ",
  },
  {
    id: "inventory-and-asset-management",
    title: "Why Choose EDUMAAT ERP for Operational Excellence?",
    content:
      "AI simplifies inventory and asset management by automating stock tracking, predicting demand, and managing supplies. It can detect shortages, optimize storage, and monitor asset conditions in real-time. With AI, managing inventory and assets becomes more efficient, accurate, and cost-effective.",
    buttonText:
      "EDUMAAT—your trusted partner in institutional governance and operational excellence.",
  },
  {
    id: "account-management",
    title: "Why EDUMAAT ERP?",
    content:
      "With EDUMAAT’s integrated management modules, your institution can eliminate fragmented systems, reduce operational inefficiencies, and gain total control over finances and resources. ",
    buttonText: "From books to balance sheets—EDUMAAT handles it all. ",
  },
  {
    id: "inventory-management",
    title: "Why EDUMAAT ERP?",
    content:
      "With EDUMAAT’s integrated management modules, your institution can eliminate fragmented systems, reduce operational inefficiencies, and gain total control over finances and resources. ",
    buttonText: "From books to balance sheets—EDUMAAT handles it all. ",
  },
  {
    id: "invoice-management",
    title: "Why EDUMAAT ERP?",
    content:
      "With EDUMAAT’s integrated management modules, your institution can eliminate fragmented systems, reduce operational inefficiencies, and gain total control over finances and resources. ",
    buttonText: "From books to balance sheets—EDUMAAT handles it all. ",
  },
  {
    id: "assets-management",
    title: "Why EDUMAAT ERP?",
    content:
      "With EDUMAAT’s integrated management modules, your institution can eliminate fragmented systems, reduce operational inefficiencies, and gain total control over finances and resources. ",
    buttonText: "From books to balance sheets—EDUMAAT handles it all. ",
  },
  {
    id: "placement",
    title: "Why Choose EDUMAAT’s Placement Management System? ",
    content:
      "EDUMAAT simplifies the most critical outcome of academic life—career readiness. With seamless tools to connect students with the right opportunities and data-driven insights to track success, EDUMAAT supports your institution’s commitment to employability and excellence. ",
    buttonText: "Turn potential into placement—with EDUMAAT ERP. ",
  },
  {
    id: "edumaat-ai",
    title: "Why Choose EDUMAAT AI?",
    content:
      "With EDUMAAT AI, you don’t just digitize—you intelligently transform. From student engagement to academic planning, our AI-powered modules ensure your institution remains ahead in the fast-evolving education landscape.",
    buttonText:
      "Let EDUMAAT AI be the brain behind your ERP—simplify complexity, amplify performance, and empower excellence.",
  },
  {
    id: "timetable-management",
    title: "Why EDUMAAT’s AI Timetable & Chatbot Solutions? ",
    content:
      "EDUMAAT  AI helps create smart and flexible timetables. It can quickly plan classes based on teacher availability, room schedules, and student needs. This reduces errors, saves time, and ensures the best use of resources. With AI, timetable management becomes faster and more efficient. ",
    buttonText: "Smarter Schedules. Smarter Support. Only with EDUMAAT ERP. ",
  },
  //hr-resource
  {
    id: "job-recruitment-management",
    title: "Simplify Hiring Requirements with EDUMAAT ",
    content:
      "AI makes recruitment faster and smarter. It can screen resumes, match candidates to roles, schedule interviews, and track hiring progress. With AI, the hiring process becomes more efficient, fair, and effective in finding the right talent.",
    buttonText:
      "Manage job requirements smoothly and systematically with EDUMAAT. ",
  },
  {
    id: "requisition-and-approval-management",
    title: "Manage Requests with Confidence",
    content:
      "AI streamlines requisition and approval processes by automating requests, tracking status, and ensuring timely approvals. It reduces delays, prevents errors, and keeps everything organized. With AI, managing approvals becomes faster, transparent, and more efficient.",
    buttonText:
      "With EDUMAAT, handle requisitions and approvals efficiently from one unified platform.",
  },
  {
    id: "role-and-privilege-management",
    title: "Take Control of User Access",
    content:
      "AI helps manage user roles and access privileges securely and efficiently. It can automatically assign roles based on responsibilities, monitor access patterns, and flag unusual activity. With AI, role and privilege management becomes smarter, safer, and easier to control.",
    buttonText:
      "With EDUMAAT’s Role & Privilege Management, secure your system and streamline user responsibilities.",
  },
  {
    id: "role-wise-dashboard",
    title: "Empower Every Role with the Right Tools",
    content:
      "EDUMAAT AI creates customized dashboards based on user roles, displaying the most relevant information and tools for each user. For students, it shows grades and assignments; for teachers, it highlights schedules and student progress; for admins, it offers system-wide insights. With AI, role-wise dashboards improve efficiency and focus.",
    buttonText:
      "EDUMAAT’s role-wise dashboards bring clarity, speed, and relevance to everyday operations.",
  },
  {
    id: "custom-letter-and-id-card-generation",
    title: "Simplify Document Creation with EDUMAAT",
    content:
      "EDUMAAT simplifies the creation of custom letters and ID cards by automatically filling in personalized details. It can generate formatted letters, certificates, and ID cards quickly, saving time and reducing errors. With AI, creating professional and accurate documents becomes easy and efficient.",
    buttonText:
      "From ID cards to official letters, generate everything you need—accurately and instantly.",
  },
  {
    id: "backup-restore-management",
    title: "Never Lose Data Again",
    content:
      "AI simplifies backup and restore processes by automating data backups at regular intervals and ensuring quick restoration when needed. It can detect potential risks, ensure data integrity, and optimize storage. With AI, managing backups becomes more secure, reliable, and effortless.",
    buttonText:
      "With EDUMAAT’s Backup & Restore, your data is safe, secure, and always recoverable.",
  },
  //finance
  {
    id: "accounting-management",
    title: "Make Smarter Financial Decisions",
    content:
      "AI enhances accounting management by automating tasks like transaction recording, invoicing, and financial reporting. It can detect discrepancies, manage budgets, and generate insights for better decision-making. With AI, accounting becomes more accurate, efficient, and less prone to errors.",
    buttonText:
      "Streamline your accounting operations with EDUMAAT’s intelligent tools.",
  },
  {
    id: "hostel-management",
    title: "Manage Student Housing Smarter",
    content:
      "AI simplifies hostel management by automating room bookings, tracking occupancy, and managing payments. It can monitor facilities, track student movements, and ensure timely maintenance. With AI, hostel operations become more efficient, organized, and responsive to student needs.",
    buttonText:
      "EDUMAAT helps you run hostel operations smoothly, securely, and efficiently.",
  },
  {
    id: "transport-management",
    title: "Drive Institutional Transport Forward",
    content:
      "AI revolutionizes transport management by providing real-time tracking of vehicles, optimizing routes, and ensuring timely arrivals. It can predict traffic patterns, monitor driver performance, and manage schedules efficiently. With AI, transportation becomes smoother, safer, and more reliable for everyone.",
    buttonText:
      "EDUMAAT helps you manage transport with control, visibility, and peace of mind.",
  },
  {
    id: "canteen-management",
    title: "Make Campus Dining Smart & Hassle-Free",
    content:
      "AI enhances canteen management by automating order processing, tracking inventory, and managing menus. It can predict food demand, optimize staffing, and monitor waste. With AI, canteens become more efficient, reducing costs and improving the overall dining experience for students and staff.",
    buttonText:
      "Manage your institutional food services better with EDUMAAT’s canteen solution.",
  },
  {
    id: "utility-management",
    title: "Smarter Utility Management Starts Here",
    content:
      "EDUMAAT optimizes utility management by monitoring energy, water, and other resource usage in real-time. It can predict consumption patterns, detect inefficiencies, and automate adjustments to reduce costs. With AI, utility management becomes more sustainable, efficient, and cost-effective.",
    buttonText:
      "Control your campus utilities with data-driven decisions using EDUMAAT.",
  },
  {
    id: "booking-management",
    title: "Book Smarter with EDUMAAT",
    content:
      "EDUMAAT streamlines booking management by automating reservations, tracking availability, and sending reminders. It can optimize schedules, reduce booking conflicts, and improve customer experiences. With AI, booking processes become faster, more organized, and user-friendly.",
    buttonText:
      "Simplify how your institution handles resource bookings with an intuitive, all-in-one platform",
  },
  //communication
  {
    id: "communication-management",
    title: "Streamlined Communication for Smarter Engagement",
    content:
      "AI improves communication management by automating messages, managing notifications, and organizing communication channels. It can prioritize messages, track conversations, and ensure timely responses. With AI, communication becomes more efficient, streamlined, and effective across teams, students, and parents.",
    buttonText:
      "Experience the future of institutional communication where every message is timely, personalized, and intelligently managed",
  },
  {
    id: "event-management",
    title: "Smarter Event Management Made Simple",
    content:
      "EDUMAAT simplifies event management by automating tasks such as scheduling, attendee tracking, and resource allocation. It can send reminders, optimize event logistics, and analyze attendee feedback. With AI, organizing and managing events becomes more efficient, streamlined, and personalized.",
    buttonText:
      "EDUMAAT transforms campus events into well-organized, interactive experiences — powered by data, automation, and intelligent planning.",
  },
  {
    id: "complaint-and-feedback-management",
    title: "Resolve Complaints Faster with Intelligent Tracking",
    content:
      "AI streamlines complaint and feedback management by automating the collection, analysis, and categorization of feedback. It can prioritize urgent issues, track resolution progress, and provide insights for improvements. With AI, handling complaints and feedback becomes faster, more organized, and customer-centric.",
    buttonText:
      "With EDUMAAT, complaint and feedback handling becomes a structured, transparent, and intelligent process — turning concerns into opportunities for growth.",
  },
  {
    id: "visitor-gate-pass-sickroom-management",
    title: "Efficiently Manage Campus Entry and Student Wellness",
    content:
      "AI enhances visitor, gate pass, and sickroom management by automating visitor registration, issuing passes, and tracking entry/exit. It can monitor sickroom occupancy, manage health data, and ensure timely action for emergencies. With AI, these processes become more efficient, secure, and organized.",
    buttonText:
      "EDUMAAT provides institutions with a holistic approach to safety, security, and student wellness — blending automation, accountability, and care into everyday campus operations.",
  },
  {
    id: "library-management",
    title: "Reimagining Library Management with AI Precision and Efficiency",
    content:
      "AI simplifies library management by automating tasks like cataloging, book tracking, and user check-outs. It can provide personalized recommendations, manage reservations, and alert users about due dates. With AI, libraries run smoothly, offering a more efficient and engaging experience for both staff and patrons.",
    buttonText:
      "EDUMAAT transforms your library into a modern, tech-driven hub for learning, making access to information faster, easier, and more efficient for everyone on campus.",
  },
  {
    id: "task-and-to-do-management",
    title: "Effortless Task Management with EDUMAAT",
    content:
      "EDUMAAT helps manage tasks and to-do lists by prioritizing, organizing, and sending reminders for upcoming deadlines. It can automate task assignments, track progress, and suggest optimizations. With AI, managing daily tasks becomes more efficient, reducing stress and improving productivity.",
    buttonText:
      "EDUMAAT helps you manage tasks more effectively, making day-to-day responsibilities less stressful and more organized, ensuring goals are met on time, every time.",
  },
  {
    id: "custom-report-builder",
    title: "From Data to Decisions with Custom Reporting",
    content:
      "EDUMAAT AI-powered custom report builders allow users to generate tailored reports based on specific needs and data points. It automates data collection, analysis, and visualization, making it easier to create reports that are both accurate and insightful. With AI, building custom reports is faster, more flexible, and less time-consuming.",
    buttonText:
      "EDUMAAT’s Custom Report Builder turns raw data into powerful, actionable insights, empowering institutions to make smarter, data-driven decisions and achieve their goals with confidence.",
  },
  {
    id: "form-builder",
    title: "Smarter Form Building for Every Need",
    content:
      "AI-powered form builders streamline the creation of custom forms for surveys, feedback, registrations, and more. It can automatically suggest fields, validate inputs, and customize layouts based on user needs. With AI, building user-friendly, efficient forms becomes faster, more accurate, and tailored to specific requirements.",
    buttonText:
      "With EDUMAAT’s Form Builder, create tailored forms that meet your institution's needs, streamline data collection, and enhance efficiency — all while ensuring a seamless user experience.",
  },
  {
    id: "integration-payment-gateway-whatsapp-email",
    title:
      "Transform Interactions with Intelligent Payment and Chat Integrations",
    content:
      "AI simplifies integrations with payment gateways, WhatsApp, and email systems by automating communication and transactions. It ensures smooth, secure payments, instant customer support via WhatsApp, and personalized email notifications. With AI, these integrations become seamless, efficient, and improve user experience.",
    buttonText:
      "EDUMAAT’s integration with payment gateways, WhatsApp, and email makes campus operations smoother, more secure, and more efficient — from payments to notifications and communication.",
  },
  {
    id: "assignment-management",
    title: "Simplify Assignment Workflows with Intelligent Tools",
    content:
      "EDUMAAT AI helps manage assignments smoothly. It can organize submissions, send deadline reminders, and check for plagiarism. Teachers save time, and students get faster feedback. With AI, assignment work becomes easier and more organized.",
    buttonText: "Track Submit and Review Assignments with One Click",
  },
  {
    id: "notification-and-reminder-management",
    title: "Why Choose EDUMAAT ERP’s Notification System?",
    content:
      "EDUMAAT’s Notification & Reminder Management module brings discipline, structure, and timeliness to your institution’s communications. By automating alerts and streamlining information flow, EDUMAAT helps create an informed campus culture where everyone stays on track and in sync.",
    buttonText: "With EDUMAAT, every reminder is a step closer to efficiency.",
  },
  {
    id: "document-management",
    title: "Why Choose EDUMAAT ERP’s Document Management System?",
    content:
      "EDUMAAT’s Document Management module simplifies institutional operations by reducing paperwork, enhancing control, and enabling quick access to critical documents. Whether it’s student certificates, faculty records, or policy files—manage everything efficiently, securely, and digitally.",
    buttonText:
      "EDUMAAT helps you move from paper to purpose—one document at a time.",
  },
];

const SptManagement = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const solutionId = segments[1] || "";
  const managementId = segments[0] || "";

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [currentSptLightItems, setCurrentSptLightCardItems] = useState<any>([]);

  const featuresForYourInstitutionCardItems = useMemo(() => {
    const matchedManagement = solutionsSpotlightMenuItems.find(
      (menu: any) => menu.id === managementId
    );

    if (!matchedManagement) return [];
    // @ts-ignore

    return matchedManagement?.items.filter((item: any) => {
      return item.id !== solutionId;
    });
  }, [solutionId, managementId]);

  const handleBookFreeDemo = () => {
    navigate("/enquiry");
  };

  useEffect(() => {
    const spotlightCardItem = sptLightCardItems.filter((item) => {
      return item.id === solutionId;
    });
    setCurrentSptLightCardItems(spotlightCardItem[0] || []);
  }, [solutionId]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(reduceBackdrop());
    }, 500);

    return () => clearTimeout(timeout); // cleanup on unmount or solutionId change
  }, [solutionId]);

  const ids = [
    "inventory-and-asset-management",
    "edumaat-ai",
    "inventory-and-asset-management",
  ];

  const subPageCards: {
    [key: string]: {
      id: string;
      title: string;
      img: string;
      path: string;
      parentId: string;
    }[];
  } = {
    "edumaat-ai": [
      {
        id: "admission-management",
        title: "AI-powered Admission Management",
        img: featuresForYourInstitutionCardImage1,
        path: "/academic/admission-management",
        parentId: "academic",
      },
      {
        id: "placement",
        title: "AI-powered Placement",
        img: featuresForYourInstitutionCardImage7,
        path: "/academic/placement",
        parentId: "academic",
      },
    ],
    "inventory-and-asset-management": [
      {
        id: "inventory-management",
        title: "Inventory Management",
        img: featuresForYourInstitutionCardImage4,
        path: "/finance/inventory-management",
        parentId: "finance",
      },
      {
        id: "assets-management",
        title: "Asset Management",
        img: featuresForYourInstitutionCardImage7,
        path: "/finance/assets-management",
        parentId: "finance",
      },
    ],
  };

  const HighLightedCards = () => (
    <div>
      <Box sx={{ px: { lg: 14, xs: 4 }, mb: 10 }}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ mx: { sm: 8 } }}>
            <Grid
              container
              spacing={{ xs: 4, sm: 8 }}
              justifyContent={"center"}
            >
              {subPageCards[`${solutionId}`]?.map((item: any, idx: any) => (
                <Grid
                  size={{ xs: 6, sm: 5, md: 4, lg: 3 }}
                  sx={{
                    backgroundColor: "#EFFAFE",
                    boxShadow: "0px 6px 18px #03B6F83D",
                    cursor: "pointer",
                    height: { sm: 250 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                  }}
                  key={`${item.title}_${idx}`}
                  onClick={() =>
                    navigate(`${item.path}`, {
                      state: item.parentId,
                    })
                  }
                >
                  <Box
                    p={2}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <LazyImage
                      src={item.img || featuresForYourInstitutionCardImage7}
                      alt="benefitsToYourInstitutionCardImage"
                      style={{ width: 70, height: 70 }}
                    />
                    <Typography variant="body2" fontWeight={600} p={2}>
                      {item.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );

  const generatePageTitle = (slug: any) => {
    if (!slug || typeof slug !== "string") return "";
    return slug
      .split("-")
      .map((word: any) =>
        ["and", "or", "of", "the", "in", "on", "at"].includes(word)
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
  };

  return (
    <Box>
      <title>{generatePageTitle(solutionId ?? "")} | Edumaat ERP</title>
      <meta
        name="description"
        content="Manage student data, profiles, and academic lifecycle efficiently with Edumaat's Student Management System."
      />
      <meta
        name="keywords"
        content="student management system, academic ERP, Edumaat ERP features,inventory management, asset tracking ERP, educational inventory software, AI ERP, education automation, smart admission, placement system"
      />
      <meta name="author" content="Edumaat" />

      <Box
        sx={{
          pl: { lg: 14, xs: 4 },
          pr: { lg: 0, xs: 4 },
        }}
      >
        <Grid container spacing={4}>
          <Grid
            size={{ sm: 6, xs: 12 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 25, md: 35, lg: 50 },
                }}
              >
                {bannerContent.find((item) => item.id === managementId)?.title}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ my: { xs: 2, lg: 5 } }}
              >
                {
                  bannerContent.find((item) => item.id === managementId)
                    ?.content
                }
              </Typography>
              <Box sx={{ mt: { xs: 2, lg: 7 } }}>
                <ReuOutlineBorderedButton
                  variant="outlined"
                  sx={{ width: 200 }}
                  onClick={handleBookFreeDemo}
                >
                  Book Now
                </ReuOutlineBorderedButton>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ sm: 6, xs: 12 }}>
            <LazyBoxImage
              src={
                bannerContent.find((item) => item.id === managementId)?.img ||
                ""
              }
              alt="solutionSpotlightBannerImage "
              sx={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box>{ids.includes(solutionId ?? "") ? <HighLightedCards /> : ""}</Box>

      <Box sx={{ px: { lg: 14, xs: 4 }, mt: { xs: 5, md: 0 } }}>
        <Box sx={{ textAlign: "center" }}>
          {cardContentHeader
            .filter((item) => {
              return item.id === solutionId;
            })
            .map((item, idx) => (
              <React.Fragment key={`${idx}_${item.title}`}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    fontSize: { xs: 20, sm: 28 },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography>{item.content}</Typography>
              </React.Fragment>
            ))}
        </Box>
        <Box sx={{ mt: 8, px: { xs: 2, sm: 0 } }}>
          <SptLightCard
            items={currentSptLightItems.items ?? []}
            key={"sptlightcard"}
          />
        </Box>
      </Box>

      {/* Benefits to Your Institution */}
      <Box sx={{ px: { lg: 14, xs: 8 }, mb: 3, mt: 8 }}>
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
          >
            Benefits to Your Institution
          </Typography>
          <Box>
            <Grid container spacing={4} justifyContent={"center"}>
              {benefitsToYourInstitutionCardItems
                .filter((item) => {
                  return item.id === solutionId;
                })
                .map((item) => {
                  return item.items.map((item, idx) => (
                    <Grid
                      size={{ xs: 12, sm: 4, lg: 2 }}
                      key={idx}
                      sx={{
                        border: "1px solid #5580FF33",
                        boxShadow: "0px 6px 12px #5580FF33",
                        height: 220,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 3,
                        transition:
                          "transform 0.4s ease,  0.4s ease, 0.4s ease",
                        willChange: "transform",
                        "&:hover": {
                          boxShadow: "3px 8px 14px #5580FF33",
                          transform: "scale(1.10)",
                          border: "3px solid #5580FF33",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <LazyImage
                          src={item.img}
                          alt="benefitsToYourInstitutionCardImage"
                          style={{ marginBottom: 12, height: 50, width: 50 }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "center", p: 2, fontWeight: 600 }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    </Grid>
                  ));
                })}
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Why Choose EDUMAAT ERP’s AI Admission System */}
      <Box sx={{ px: { lg: 18, xs: 4 }, my: 8 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <LazyBoxImage
              src={admissionSystemImage}
              alt="admissionSystemImage"
              sx={{
                borderRadius: 2,
                boxShadow: "0px 6px 12px #5580FF33",
                height: { xs: 200, sm: 300, md: "100%", lg: "90%" },
                width: { xs: "100%", md: "90%" },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            {whyChooseEdumaatContent
              .filter((item) => {
                return item.id === solutionId;
              })
              .map((item, idx) => (
                <React.Fragment key={`${idx}_${item.id}`}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", mb: 3, mt: 4 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ my: 4 }}>{item.content}</Typography>
                  <ReuGradientButton
                    key={"amplify success"}
                    variant="contained"
                    sx={{ px: { xs: 2, lg: 12 }, py: { sm: 2, xs: 0.3 } }}
                    onClick={handleBookFreeDemo}
                  >
                    {item.buttonText || "Book Now"}
                  </ReuGradientButton>
                </React.Fragment>
              ))}
          </Grid>
        </Grid>
      </Box>

      {/* Check out other features for your Institution */}
      <Box sx={{ pl: { lg: 14, xs: 4 }, pr: { lg: 14, xs: 4 }, my: 5, mb: 10 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 5 }}>
            Check out other features for your Institution
          </Typography>

          <Box sx={{ mx: { xs: 0, lg: 8 } }}>
            <Grid
              container
              spacing={{ xs: 4, lg: 8 }}
              justifyContent={"center"}
            >
              {featuresForYourInstitutionCardItems
                ?.filter((item: any) => !item.id.includes(solutionId))
                .map((item: any, idx: any) => (
                  <Grid
                    size={{ xs: 10, sm: 4, lg: 3 }}
                    sx={{
                      backgroundColor: "#EFFAFE",
                      boxShadow: "0px 6px 18px #03B6F83D",
                      cursor: "pointer",
                      height: 250,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      transition: "transform 0.4s ease,  0.4s ease, 0.4s ease",
                      willChange: "transform",
                      "&:hover": {
                        boxShadow: "3px 8px 14px #03B6F83D",
                        transform: "scale(1.10)",
                        border: "2px solid #03B6F83D",
                      },
                    }}
                    key={`${item.title}_${idx}`}
                    onClick={() =>
                      navigate(`/${managementId}/${item.id}`, {
                        state: managementId,
                      })
                    }
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 2,
                        overflow: "hidden",
                      }}
                    >
                      <LazyImage
                        src={item.img || featuresForYourInstitutionCardImage7}
                        alt="benefitsToYourInstitutionCardImage"
                        style={{ height: 70, width: 70 }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          textAlign: "center",
                          p: 2,
                          fontWeight: 600,
                          fontSize: 14,
                          textWrap: "wrap",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SptManagement;
