import type { EmployeeTypeEnum } from '../../enums/employee-type-enum.enum';
import type { EmployeeAvailabilityStatus } from '../../enums/employee-availability-status.enum';

export interface Additional {
  keyEn?: string;
  keyAr?: string;
  value?: string;
}

export interface AdditionalDto {
  keyEn?: string;
  keyAr?: string;
  value?: string;
}

export interface AllowanceDto {
  keyEn?: string;
  keyAr?: string;
  value?: string;
  disbursementDate?: string;
  otherDetailsEn?: string;
  otherDetailsAr?: string;
}

export interface AllowancesDetailsDto extends BaseResponseDto {
  date?: string;
  items: AllowanceDto[];
}

export interface AttendanceDto extends BaseResponseDto {
  attendanceHours?: string;
  remainingHours?: string;
  attendenceAVGHours?: string;
  date?: string;
  attendanceRate?: string;
  excuseHoursWithoutCompensation?: string;
  attendanceServiceURL?: string;
}

export interface BaseResponseDto {
  requestUUID?: string;
  statusCode?: string;
  statusDescription?: string;
  errorDetails?: string;
}

export interface CompletedCourse {
  courseNameEn?: string;
  courseNameAr?: string;
  trainingEntityEn?: string;
  trainingEntityAr?: string;
  startDate?: string;
  endDate?: string;
  trainingTypeEn?: string;
  trainingTypeAr?: string;
  trainingCityAr?: string;
  trainingCityEn?: string;
  trainingCountryEn?: string;
  trainingCountryAr?: string;
  submitTrainigUrl?: string;
}

export interface ContactAddress {
  mobileNumber?: string;
  workNumber?: string;
  personalEmail?: string;
  workEmail?: string;
}

export interface ContactData {
  contactAddress: ContactAddress;
  workLocation: WorkLocation;
  socialMedia: SocialMedia;
}

export interface ContactInfoDto {
  mobileNumber?: string;
  personalEmail?: string;
  sectionName?: string;
  floorNumber?: string;
  officeNumber?: string;
  linkedIn?: string;
  twitter?: string;
}

export interface CurrentJob {
  jobTitleEn?: string;
  jobTitleAr?: string;
  sectorTitleEn?: string;
  sectorTitleAr?: string;
  generalDepartmentNameEn?: string;
  generalDepartmentNameAr?: string;
  departmentNameEn?: string;
  departmentNameAr?: string;
  jobDegreeEn?: string;
  jobDegreeAr?: string;
  directManagerNameEn?: string;
  directManagerNameAr?: string;
  leaveBalance?: string;
  salary: Salary;
}

export interface Deduction {
  keyEn?: string;
  keyAr?: string;
  value?: string;
}

export interface DeductionDto {
  keyEn?: string;
  keyAr?: string;
  value?: string;
}

export interface Dependent {
  dependantNameEn?: string;
  dependantNameAr?: string;
  civilRegistryNumber?: string;
  relationshipEn?: string;
  relationshipAr?: string;
  genderEn?: string;
  genderAr?: string;
  dateOfBirthGregorian?: string;
  dateOfBirthHijri?: string;
  updateDependantsURL?: string;
}

export interface EmployeeCreateInputDto {
  userName: string;
  employeeNameAr: string;
  employeeNameEn: string;
  email: string;
  jobTitleAr: string;
  jobTitleEn: string;
  directManagerUserName: string;
  phoneNumber: string;
  sectorId: string;
  generalDepartmentId: string;
  departmentId: string;
}

export interface EmployeeProfileDto extends BaseResponseDto {
  mainData: MainData;
  contactData: ContactData;
  jobData: JobData;
  dependents: Dependent[];
  qualifications: Qualification[];
  addDependantsURL?: string;
  updateUserInfoURL?: string;
}

export interface EmployeeUpdateInputDto {
  id: string;
  userName: string;
  employeeNameAr: string;
  employeeNameEn: string;
  email: string;
  jobTitleAr: string;
  jobTitleEn: string;
  directManagerUserName: string;
  phoneNumber: string;
  sectorId: string;
  generalDepartmentId: string;
  departmentId: string;
}

export interface GetAllowancesDetailsInput {
  year?: number;
  month?: number;
}

export interface GetAttendanceInput {
  year?: number;
  month?: number;
}

export interface GetMyTeamInput {
  id: string;
}

export interface GoalDto {
  goalTitleEn?: string;
  goalTitleAr?: string;
  goalWeight?: string;
  startDate?: string;
  endDate?: string;
  completionPercentage?: string;
}

export interface GoalsListDto extends BaseResponseDto {
  goals: GoalDto[];
  totalGoals?: string;
  year?: string;
  yearlyGoalsServiceURL?: string;
}

export interface HousingLoanDto extends BaseResponseDto {
  housingLoanExist?: string;
  startDate?: string;
  endDate?: string;
  totalMonths?: string;
  monthlyInstallment?: string;
  housingLoanAmount?: string;
  completionPercentage?: string;
  numberOfPaidInstallments?: string;
  numberOfRemainingInstallments?: string;
  housingLoanServiceURL?: string;
  numberOfTotalInstallments?: string;
  date?: string;
}

export interface IdentificationCardDto {
  username?: string;
  empFullName?: string;
  imageId?: number;
  positionName?: string;
  jobNumber?: string;
  birthDate?: string;
  employeeType?: EmployeeTypeEnum;
}

export interface JobData {
  currentJob: CurrentJob;
  lastJobsHistory: LastJobHistory[];
}

export interface LastJobHistory {
  fromDate?: string;
  toDate?: string;
  jobTitleEn?: string;
  jobTitleAr?: string;
  sectorTitleEn?: string;
  sectorTitleAr?: string;
  generalDepartmentNameEn?: string;
  generalDepartmentNameAr?: string;
  departmentNameEn?: string;
  departmentNameAr?: string;
  jobDegreeEn?: string;
  jobDegreeAr?: string;
  directManagerNameEn?: string;
  directManagerNameAr?: string;
}

export interface LoanDto extends BaseResponseDto {
  loanExist?: string;
  startDate?: string;
  endDate?: string;
  totalMonths?: string;
  monthlyInstallment?: string;
  loanAmount?: string;
  completionPercentage?: string;
  numberOfPaidInstallments?: string;
  numberOfRemainingInstallments?: string;
  numberOfTotalInstallments?: string;
  date?: string;
  loanServiceURL?: string;
}

export interface MainData {
  personId?: string;
  imageId?: number;
  personNumber?: string;
  empFullNameEn?: string;
  empFullNameAr?: string;
  jobPersonNumber?: string;
  civilRegistryNumber?: string;
  maritalStatusEn?: string;
  maritalStatusAr?: string;
  dateOfBirthGregorian?: string;
  dateOfBirthHijri?: string;
  hireDateGregorian?: string;
  hireDateHijri?: string;
}

export interface MyTeamStatisticsDto {
  officialCount: number;
  officialPercentage: number;
  contractCount: number;
  contractPercentage: number;
}

export interface Qualification {
  entityNameEn?: string;
  entityNameAr?: string;
  degreeTitleEn?: string;
  degreeTitleAr?: string;
  degreeDate?: string;
  qualificationSpecializationEN?: string;
  qualificationSpecializationAr?: string;
  qualificationGPA?: string;
  qualificationGPAOutOf?: string;
}

export interface RemoteBalanceDto extends BaseResponseDto {
  usedBalance?: string;
  remainingBalance?: string;
  totalBalance?: string;
  date?: string;
  remoteServiceURL?: string;
}

export interface Salary {
  net?: string;
  basic?: string;
  additionals: Additional[];
  deductions: Deduction[];
  total?: string;
}

export interface SalaryDto extends BaseResponseDto {
  net?: string;
  total?: string;
  basic?: string;
  totalDeductions?: string;
  totalAdditionals?: string;
  date?: string;
  salaryServiceURL?: string;
  additionals: AdditionalDto[];
  deductions: DeductionDto[];
}

export interface SocialMedia {
  linkedIn?: string;
  twitter?: string;
}

export interface TainingCoursesDto extends BaseResponseDto {
  upcomingCourses: UpcomingCourse[];
  completedCourses: CompletedCourse[];
  enrollCourseURL?: string;
}

export interface TeamMemberDto {
  imageId?: number;
  memberType: EmployeeTypeEnum;
  empNameEn?: string;
  empNameAr?: string;
  username?: string;
  generalDepartmentNameEn?: string;
  generalDepartmentNameAr?: string;
  jobTitleEn?: string;
  jobTitleAr?: string;
  employeeAvailabilityStatus?: EmployeeAvailabilityStatus;
  directManagerUsername?: string;
  id?: string;
  directManagerId?: string;
}

export interface UpcomingCourse {
  courseNameEn?: string;
  courseNameAr?: string;
  trainingEntityEn?: string;
  trainingEntityAr?: string;
  trainingCityAr?: string;
  trainingCityEn?: string;
  trainingCountryEn?: string;
  trainingCountryAr?: string;
  startDate?: string;
  endDate?: string;
  trainingTypeEn?: string;
  trainingTypeAr?: string;
}

export interface UpdateImageDto {
  imageId?: number;
  imageFiles?: string;
}

export interface VacationsDto extends BaseResponseDto {
  usedBalance?: string;
  remainingBalance?: string;
  totalBalance?: string;
  year?: string;
  vacationServiceURL?: string;
}

export interface WorkLocation {
  buildingEn?: string;
  buildingAr?: string;
  locationNameUs?: string;
  locationNameAr?: string;
  sectionName?: string;
  floorNumber?: string;
  officeNumber?: string;
}

export interface WorkingHoursDto extends BaseResponseDto {
  attendanceHours?: string;
  attendanceHoursPercentage?: string;
  remainingHours?: string;
  remainingHoursPercentage?: string;
  leaveUsedBalance?: string;
  leaveUsedPercentage?: string;
  leaveRemainingBalance?: string;
  leaveRemainingPercentage?: string;
  leaveTotalBalance?: string;
}

export interface YearlyEvaluationDto extends BaseResponseDto {
  valueEn?: string;
  valueAr?: string;
  year?: string;
  evaluationDescriptionEn?: string;
  evaluationDescriptionAr?: string;
  yearlyEvaluationServiceURL?: string;
}
