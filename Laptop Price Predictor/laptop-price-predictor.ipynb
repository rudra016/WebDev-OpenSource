{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 21,
   "id": "82edeb04",
   "metadata": {},
   "outputs": [],
   "source": [
    "import numpy as np\n",
    "import pandas as pd\n",
    "import matplotlib.pyplot as plt"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "id": "203583d9",
   "metadata": {},
   "outputs": [],
   "source": [
    "df = pd.read_csv('laptop_data.csv')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "id": "5106314a",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Unnamed: 0</th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Inches</th>\n",
       "      <th>ScreenResolution</th>\n",
       "      <th>Cpu</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>0</td>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>IPS Panel Retina Display 2560x1600</td>\n",
       "      <td>Intel Core i5 2.3GHz</td>\n",
       "      <td>8GB</td>\n",
       "      <td>128GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37kg</td>\n",
       "      <td>71378.6832</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>1</td>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>1440x900</td>\n",
       "      <td>Intel Core i5 1.8GHz</td>\n",
       "      <td>8GB</td>\n",
       "      <td>128GB Flash Storage</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34kg</td>\n",
       "      <td>47895.5232</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>2</td>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>15.6</td>\n",
       "      <td>Full HD 1920x1080</td>\n",
       "      <td>Intel Core i5 7200U 2.5GHz</td>\n",
       "      <td>8GB</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86kg</td>\n",
       "      <td>30636.0000</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>3</td>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>15.4</td>\n",
       "      <td>IPS Panel Retina Display 2880x1800</td>\n",
       "      <td>Intel Core i7 2.7GHz</td>\n",
       "      <td>16GB</td>\n",
       "      <td>512GB SSD</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83kg</td>\n",
       "      <td>135195.3360</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>4</td>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>IPS Panel Retina Display 2560x1600</td>\n",
       "      <td>Intel Core i5 3.1GHz</td>\n",
       "      <td>8GB</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37kg</td>\n",
       "      <td>96095.8080</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "   Unnamed: 0 Company   TypeName  Inches                    ScreenResolution  \\\n",
       "0           0   Apple  Ultrabook    13.3  IPS Panel Retina Display 2560x1600   \n",
       "1           1   Apple  Ultrabook    13.3                            1440x900   \n",
       "2           2      HP   Notebook    15.6                   Full HD 1920x1080   \n",
       "3           3   Apple  Ultrabook    15.4  IPS Panel Retina Display 2880x1800   \n",
       "4           4   Apple  Ultrabook    13.3  IPS Panel Retina Display 2560x1600   \n",
       "\n",
       "                          Cpu   Ram               Memory  \\\n",
       "0        Intel Core i5 2.3GHz   8GB            128GB SSD   \n",
       "1        Intel Core i5 1.8GHz   8GB  128GB Flash Storage   \n",
       "2  Intel Core i5 7200U 2.5GHz   8GB            256GB SSD   \n",
       "3        Intel Core i7 2.7GHz  16GB            512GB SSD   \n",
       "4        Intel Core i5 3.1GHz   8GB            256GB SSD   \n",
       "\n",
       "                            Gpu  OpSys  Weight        Price  \n",
       "0  Intel Iris Plus Graphics 640  macOS  1.37kg   71378.6832  \n",
       "1        Intel HD Graphics 6000  macOS  1.34kg   47895.5232  \n",
       "2         Intel HD Graphics 620  No OS  1.86kg   30636.0000  \n",
       "3            AMD Radeon Pro 455  macOS  1.83kg  135195.3360  \n",
       "4  Intel Iris Plus Graphics 650  macOS  1.37kg   96095.8080  "
      ]
     },
     "execution_count": 3,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "id": "5df0e810",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "(1303, 12)"
      ]
     },
     "execution_count": 4,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.shape"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "id": "2721be49",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "<class 'pandas.core.frame.DataFrame'>\n",
      "RangeIndex: 1303 entries, 0 to 1302\n",
      "Data columns (total 12 columns):\n",
      " #   Column            Non-Null Count  Dtype  \n",
      "---  ------            --------------  -----  \n",
      " 0   Unnamed: 0        1303 non-null   int64  \n",
      " 1   Company           1303 non-null   object \n",
      " 2   TypeName          1303 non-null   object \n",
      " 3   Inches            1303 non-null   float64\n",
      " 4   ScreenResolution  1303 non-null   object \n",
      " 5   Cpu               1303 non-null   object \n",
      " 6   Ram               1303 non-null   object \n",
      " 7   Memory            1303 non-null   object \n",
      " 8   Gpu               1303 non-null   object \n",
      " 9   OpSys             1303 non-null   object \n",
      " 10  Weight            1303 non-null   object \n",
      " 11  Price             1303 non-null   float64\n",
      "dtypes: float64(2), int64(1), object(9)\n",
      "memory usage: 122.3+ KB\n"
     ]
    }
   ],
   "source": [
    "df.info()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 6,
   "id": "d623a6c1",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "0"
      ]
     },
     "execution_count": 6,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.duplicated().sum()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 7,
   "id": "a3e5e8f5",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "Unnamed: 0          0\n",
       "Company             0\n",
       "TypeName            0\n",
       "Inches              0\n",
       "ScreenResolution    0\n",
       "Cpu                 0\n",
       "Ram                 0\n",
       "Memory              0\n",
       "Gpu                 0\n",
       "OpSys               0\n",
       "Weight              0\n",
       "Price               0\n",
       "dtype: int64"
      ]
     },
     "execution_count": 7,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.isnull().sum()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 8,
   "id": "7da78c39",
   "metadata": {},
   "outputs": [],
   "source": [
    "df.drop(columns=['Unnamed: 0'],inplace=True)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 9,
   "id": "533fe856",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Inches</th>\n",
       "      <th>ScreenResolution</th>\n",
       "      <th>Cpu</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>IPS Panel Retina Display 2560x1600</td>\n",
       "      <td>Intel Core i5 2.3GHz</td>\n",
       "      <td>8GB</td>\n",
       "      <td>128GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37kg</td>\n",
       "      <td>71378.6832</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>1440x900</td>\n",
       "      <td>Intel Core i5 1.8GHz</td>\n",
       "      <td>8GB</td>\n",
       "      <td>128GB Flash Storage</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34kg</td>\n",
       "      <td>47895.5232</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>15.6</td>\n",
       "      <td>Full HD 1920x1080</td>\n",
       "      <td>Intel Core i5 7200U 2.5GHz</td>\n",
       "      <td>8GB</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86kg</td>\n",
       "      <td>30636.0000</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>15.4</td>\n",
       "      <td>IPS Panel Retina Display 2880x1800</td>\n",
       "      <td>Intel Core i7 2.7GHz</td>\n",
       "      <td>16GB</td>\n",
       "      <td>512GB SSD</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83kg</td>\n",
       "      <td>135195.3360</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>IPS Panel Retina Display 2560x1600</td>\n",
       "      <td>Intel Core i5 3.1GHz</td>\n",
       "      <td>8GB</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37kg</td>\n",
       "      <td>96095.8080</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName  Inches                    ScreenResolution  \\\n",
       "0   Apple  Ultrabook    13.3  IPS Panel Retina Display 2560x1600   \n",
       "1   Apple  Ultrabook    13.3                            1440x900   \n",
       "2      HP   Notebook    15.6                   Full HD 1920x1080   \n",
       "3   Apple  Ultrabook    15.4  IPS Panel Retina Display 2880x1800   \n",
       "4   Apple  Ultrabook    13.3  IPS Panel Retina Display 2560x1600   \n",
       "\n",
       "                          Cpu   Ram               Memory  \\\n",
       "0        Intel Core i5 2.3GHz   8GB            128GB SSD   \n",
       "1        Intel Core i5 1.8GHz   8GB  128GB Flash Storage   \n",
       "2  Intel Core i5 7200U 2.5GHz   8GB            256GB SSD   \n",
       "3        Intel Core i7 2.7GHz  16GB            512GB SSD   \n",
       "4        Intel Core i5 3.1GHz   8GB            256GB SSD   \n",
       "\n",
       "                            Gpu  OpSys  Weight        Price  \n",
       "0  Intel Iris Plus Graphics 640  macOS  1.37kg   71378.6832  \n",
       "1        Intel HD Graphics 6000  macOS  1.34kg   47895.5232  \n",
       "2         Intel HD Graphics 620  No OS  1.86kg   30636.0000  \n",
       "3            AMD Radeon Pro 455  macOS  1.83kg  135195.3360  \n",
       "4  Intel Iris Plus Graphics 650  macOS  1.37kg   96095.8080  "
      ]
     },
     "execution_count": 9,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 13,
   "id": "b0c543e1",
   "metadata": {},
   "outputs": [],
   "source": [
    "df['Ram'] = df['Ram'].str.replace('GB','')\n",
    "df['Weight'] = df['Weight'].str.replace('kg','')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 14,
   "id": "291e2927",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Inches</th>\n",
       "      <th>ScreenResolution</th>\n",
       "      <th>Cpu</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>IPS Panel Retina Display 2560x1600</td>\n",
       "      <td>Intel Core i5 2.3GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>1440x900</td>\n",
       "      <td>Intel Core i5 1.8GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB Flash Storage</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>15.6</td>\n",
       "      <td>Full HD 1920x1080</td>\n",
       "      <td>Intel Core i5 7200U 2.5GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>15.4</td>\n",
       "      <td>IPS Panel Retina Display 2880x1800</td>\n",
       "      <td>Intel Core i7 2.7GHz</td>\n",
       "      <td>16</td>\n",
       "      <td>512GB SSD</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>IPS Panel Retina Display 2560x1600</td>\n",
       "      <td>Intel Core i5 3.1GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName  Inches                    ScreenResolution  \\\n",
       "0   Apple  Ultrabook    13.3  IPS Panel Retina Display 2560x1600   \n",
       "1   Apple  Ultrabook    13.3                            1440x900   \n",
       "2      HP   Notebook    15.6                   Full HD 1920x1080   \n",
       "3   Apple  Ultrabook    15.4  IPS Panel Retina Display 2880x1800   \n",
       "4   Apple  Ultrabook    13.3  IPS Panel Retina Display 2560x1600   \n",
       "\n",
       "                          Cpu Ram               Memory  \\\n",
       "0        Intel Core i5 2.3GHz   8            128GB SSD   \n",
       "1        Intel Core i5 1.8GHz   8  128GB Flash Storage   \n",
       "2  Intel Core i5 7200U 2.5GHz   8            256GB SSD   \n",
       "3        Intel Core i7 2.7GHz  16            512GB SSD   \n",
       "4        Intel Core i5 3.1GHz   8            256GB SSD   \n",
       "\n",
       "                            Gpu  OpSys Weight        Price  \n",
       "0  Intel Iris Plus Graphics 640  macOS   1.37   71378.6832  \n",
       "1        Intel HD Graphics 6000  macOS   1.34   47895.5232  \n",
       "2         Intel HD Graphics 620  No OS   1.86   30636.0000  \n",
       "3            AMD Radeon Pro 455  macOS   1.83  135195.3360  \n",
       "4  Intel Iris Plus Graphics 650  macOS   1.37   96095.8080  "
      ]
     },
     "execution_count": 14,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 15,
   "id": "9d4c27a5",
   "metadata": {},
   "outputs": [],
   "source": [
    "df['Ram'] = df['Ram'].astype('int32')\n",
    "df['Weight'] = df['Weight'].astype('float32')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 16,
   "id": "356bdba8",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "<class 'pandas.core.frame.DataFrame'>\n",
      "RangeIndex: 1303 entries, 0 to 1302\n",
      "Data columns (total 11 columns):\n",
      " #   Column            Non-Null Count  Dtype  \n",
      "---  ------            --------------  -----  \n",
      " 0   Company           1303 non-null   object \n",
      " 1   TypeName          1303 non-null   object \n",
      " 2   Inches            1303 non-null   float64\n",
      " 3   ScreenResolution  1303 non-null   object \n",
      " 4   Cpu               1303 non-null   object \n",
      " 5   Ram               1303 non-null   int32  \n",
      " 6   Memory            1303 non-null   object \n",
      " 7   Gpu               1303 non-null   object \n",
      " 8   OpSys             1303 non-null   object \n",
      " 9   Weight            1303 non-null   float32\n",
      " 10  Price             1303 non-null   float64\n",
      "dtypes: float32(1), float64(2), int32(1), object(7)\n",
      "memory usage: 101.9+ KB\n"
     ]
    }
   ],
   "source": [
    "df.info()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 17,
   "id": "51e9c4c5",
   "metadata": {},
   "outputs": [],
   "source": [
    "import seaborn as sns"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 18,
   "id": "37e41400",
   "metadata": {},
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "C:\\Users\\91842\\anaconda3\\lib\\site-packages\\seaborn\\distributions.py:2557: FutureWarning: `distplot` is a deprecated function and will be removed in a future version. Please adapt your code to use either `displot` (a figure-level function with similar flexibility) or `histplot` (an axes-level function for histograms).\n",
      "  warnings.warn(msg, FutureWarning)\n"
     ]
    },
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:xlabel='Price', ylabel='Density'>"
      ]
     },
     "execution_count": 18,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.distplot(df['Price'])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 19,
   "id": "505d0590",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:>"
      ]
     },
     "execution_count": 19,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "df['Company'].value_counts().plot(kind='bar')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 27,
   "id": "894b0057",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.barplot(x=df['Company'],y=df['Price'])\n",
    "plt.xticks(rotation='vertical')\n",
    "plt.show()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 28,
   "id": "b2f90ba1",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:>"
      ]
     },
     "execution_count": 28,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "df['TypeName'].value_counts().plot(kind='bar')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 29,
   "id": "110dbb85",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.barplot(x=df['TypeName'],y=df['Price'])\n",
    "plt.xticks(rotation='vertical')\n",
    "plt.show()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 30,
   "id": "8ba1598a",
   "metadata": {},
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "C:\\Users\\91842\\anaconda3\\lib\\site-packages\\seaborn\\distributions.py:2557: FutureWarning: `distplot` is a deprecated function and will be removed in a future version. Please adapt your code to use either `displot` (a figure-level function with similar flexibility) or `histplot` (an axes-level function for histograms).\n",
      "  warnings.warn(msg, FutureWarning)\n"
     ]
    },
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:xlabel='Inches', ylabel='Density'>"
      ]
     },
     "execution_count": 30,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.distplot(df['Inches'])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 31,
   "id": "114dabbf",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:xlabel='Inches', ylabel='Price'>"
      ]
     },
     "execution_count": 31,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.scatterplot(x=df['Inches'],y=df['Price'])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 32,
   "id": "46a2daff",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "Full HD 1920x1080                                507\n",
       "1366x768                                         281\n",
       "IPS Panel Full HD 1920x1080                      230\n",
       "IPS Panel Full HD / Touchscreen 1920x1080         53\n",
       "Full HD / Touchscreen 1920x1080                   47\n",
       "1600x900                                          23\n",
       "Touchscreen 1366x768                              16\n",
       "Quad HD+ / Touchscreen 3200x1800                  15\n",
       "IPS Panel 4K Ultra HD 3840x2160                   12\n",
       "IPS Panel 4K Ultra HD / Touchscreen 3840x2160     11\n",
       "4K Ultra HD / Touchscreen 3840x2160               10\n",
       "Touchscreen 2560x1440                              7\n",
       "IPS Panel 1366x768                                 7\n",
       "4K Ultra HD 3840x2160                              7\n",
       "IPS Panel Quad HD+ / Touchscreen 3200x1800         6\n",
       "Touchscreen 2256x1504                              6\n",
       "IPS Panel Retina Display 2304x1440                 6\n",
       "IPS Panel Retina Display 2560x1600                 6\n",
       "IPS Panel Touchscreen 2560x1440                    5\n",
       "IPS Panel 2560x1440                                4\n",
       "IPS Panel Retina Display 2880x1800                 4\n",
       "IPS Panel Touchscreen 1920x1200                    4\n",
       "1440x900                                           4\n",
       "Quad HD+ 3200x1800                                 3\n",
       "IPS Panel Quad HD+ 2560x1440                       3\n",
       "1920x1080                                          3\n",
       "Touchscreen 2400x1600                              3\n",
       "IPS Panel Touchscreen 1366x768                     3\n",
       "2560x1440                                          3\n",
       "IPS Panel Full HD 2160x1440                        2\n",
       "IPS Panel Touchscreen / 4K Ultra HD 3840x2160      2\n",
       "IPS Panel Quad HD+ 3200x1800                       2\n",
       "Touchscreen / Full HD 1920x1080                    1\n",
       "IPS Panel Retina Display 2736x1824                 1\n",
       "IPS Panel Full HD 1920x1200                        1\n",
       "IPS Panel Full HD 1366x768                         1\n",
       "Touchscreen / 4K Ultra HD 3840x2160                1\n",
       "IPS Panel Touchscreen 2400x1600                    1\n",
       "IPS Panel Full HD 2560x1440                        1\n",
       "Touchscreen / Quad HD+ 3200x1800                   1\n",
       "Name: ScreenResolution, dtype: int64"
      ]
     },
     "execution_count": 32,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df['ScreenResolution'].value_counts()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 34,
   "id": "4e4f26f5",
   "metadata": {},
   "outputs": [],
   "source": [
    "df['Touchscreen'] = df['ScreenResolution'].apply(lambda x:1 if 'Touchscreen' in x else 0)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 37,
   "id": "07992d2e",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Inches</th>\n",
       "      <th>ScreenResolution</th>\n",
       "      <th>Cpu</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>1154</th>\n",
       "      <td>Dell</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>15.6</td>\n",
       "      <td>IPS Panel Touchscreen / 4K Ultra HD 3840x2160</td>\n",
       "      <td>Intel Core i5 6300HQ 2.3GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Nvidia GeForce 960M</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>2.04</td>\n",
       "      <td>119916.2304</td>\n",
       "      <td>1</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>750</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>Netbook</td>\n",
       "      <td>11.6</td>\n",
       "      <td>Touchscreen 1366x768</td>\n",
       "      <td>Intel Celeron Dual Core N3060 1.6GHz</td>\n",
       "      <td>4</td>\n",
       "      <td>128GB SSD</td>\n",
       "      <td>Intel HD Graphics 400</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>1.40</td>\n",
       "      <td>25308.0000</td>\n",
       "      <td>1</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1246</th>\n",
       "      <td>Dell</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>14.0</td>\n",
       "      <td>1366x768</td>\n",
       "      <td>Intel Core i5 7200U 2.5GHz</td>\n",
       "      <td>4</td>\n",
       "      <td>500GB HDD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>1.60</td>\n",
       "      <td>46620.0000</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>879</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>15.6</td>\n",
       "      <td>Full HD 1920x1080</td>\n",
       "      <td>Intel Core i5 7200U 2.5GHz</td>\n",
       "      <td>4</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>2.04</td>\n",
       "      <td>44701.9200</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1021</th>\n",
       "      <td>Toshiba</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>Full HD 1920x1080</td>\n",
       "      <td>Intel Core i5 6200U 2.3GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 520</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>1.20</td>\n",
       "      <td>84715.2000</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "      Company   TypeName  Inches  \\\n",
       "1154     Dell   Notebook    15.6   \n",
       "750    Lenovo    Netbook    11.6   \n",
       "1246     Dell   Notebook    14.0   \n",
       "879        HP   Notebook    15.6   \n",
       "1021  Toshiba  Ultrabook    13.3   \n",
       "\n",
       "                                   ScreenResolution  \\\n",
       "1154  IPS Panel Touchscreen / 4K Ultra HD 3840x2160   \n",
       "750                            Touchscreen 1366x768   \n",
       "1246                                       1366x768   \n",
       "879                               Full HD 1920x1080   \n",
       "1021                              Full HD 1920x1080   \n",
       "\n",
       "                                       Cpu  Ram     Memory  \\\n",
       "1154           Intel Core i5 6300HQ 2.3GHz    8  256GB SSD   \n",
       "750   Intel Celeron Dual Core N3060 1.6GHz    4  128GB SSD   \n",
       "1246            Intel Core i5 7200U 2.5GHz    4  500GB HDD   \n",
       "879             Intel Core i5 7200U 2.5GHz    4  256GB SSD   \n",
       "1021            Intel Core i5 6200U 2.3GHz    8  256GB SSD   \n",
       "\n",
       "                        Gpu       OpSys  Weight        Price  Touchscreen  \n",
       "1154    Nvidia GeForce 960M  Windows 10    2.04  119916.2304            1  \n",
       "750   Intel HD Graphics 400  Windows 10    1.40   25308.0000            1  \n",
       "1246  Intel HD Graphics 620  Windows 10    1.60   46620.0000            0  \n",
       "879   Intel HD Graphics 620  Windows 10    2.04   44701.9200            0  \n",
       "1021  Intel HD Graphics 520  Windows 10    1.20   84715.2000            0  "
      ]
     },
     "execution_count": 37,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.sample(5)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 38,
   "id": "2fa50fd6",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:>"
      ]
     },
     "execution_count": 38,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "iVBORw0KGgoAAAANSUhEUgAAAX0AAAD1CAYAAAC87SVQAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjMuNCwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy8QVMy6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAMpklEQVR4nO3cf6jd913H8efLxNVtZZjS25AmmYkYnclAppdYHYgYIZGK6T+FDKZhFAKS6SaCJv7TvwIVZKhgB2GbRpwNoQ4aNpyWzCKiNLtdi1saY8LSJdfE5s6f0z+yJXv7x/2Ch9ubpvec9Nw27+cDwvd7Pt/P93w/hfR5v3xzzk1VIUnq4XtWewGSpOkx+pLUiNGXpEaMviQ1YvQlqRGjL0mNrF3tBdzO/fffX1u2bFntZUjS28oLL7zwzaqaWTr+lo/+li1bmJubW+1lSNLbSpJvLDfu4x1JasToS1IjRl+SGjH6ktSI0ZekRoy+JDVi9CWpEaMvSY285b+c9Xax5dAXVnsJd41Xnnh4tZcg3bW805ekRoy+JDVi9CWpEaMvSY0YfUlqxOhLUiNGX5IaMfqS1IjRl6RGjL4kNWL0JakRoy9JjRh9SWrE6EtSI0Zfkhox+pLUyG2jn+QzSa4l+drI2H1Jnk1yftiuGzl2OMmFJOeS7B4Z/4kkXx2O/WGS3Pn/HEnS63kjd/p/AuxZMnYIOFVV24BTw2uSbAf2ATuGc55MsmY455PAAWDb8Gfpe0qS3mS3jX5V/S3w70uG9wLHhv1jwCMj48er6npVXQQuADuTbADeU1X/UFUF/OnIOZKkKRn3mf76qroKMGwfGMY3ApdH5s0PYxuH/aXjkqQputP/kLvcc/p6nfHl3yQ5kGQuydzCwsIdW5wkdTdu9F8dHtkwbK8N4/PA5pF5m4Arw/imZcaXVVVHq2q2qmZnZmbGXKIkaalxo38S2D/s7weeGRnfl+SeJFtZ/Afb08MjoG8leWj41M6vjJwjSZqStbebkOQp4GeB+5PMA48DTwAnkjwGXAIeBaiqM0lOAC8DN4CDVXVzeKtfZfGTQO8E/nL4I0maottGv6o+dItDu24x/whwZJnxOeD9K1qdJOmO8hu5ktSI0ZekRoy+JDVi9CWpEaMvSY0YfUlqxOhLUiNGX5IaMfqS1IjRl6RGjL4kNWL0JakRoy9JjRh9SWrE6EtSI0Zfkhox+pLUiNGXpEaMviQ1YvQlqRGjL0mNGH1JasToS1IjRl+SGjH6ktSI0ZekRoy+JDVi9CWpEaMvSY1MFP0kv5HkTJKvJXkqyfcluS/Js0nOD9t1I/MPJ7mQ5FyS3ZMvX5K0EmNHP8lG4NeB2ap6P7AG2AccAk5V1Tbg1PCaJNuH4zuAPcCTSdZMtnxJ0kpM+nhnLfDOJGuBdwFXgL3AseH4MeCRYX8vcLyqrlfVReACsHPC60uSVmDs6FfVvwC/B1wCrgL/VVV/DayvqqvDnKvAA8MpG4HLI28xP4y9RpIDSeaSzC0sLIy7REnSEpM83lnH4t37VuBB4N1JPvx6pywzVstNrKqjVTVbVbMzMzPjLlGStMQkj3d+HrhYVQtV9R3gc8BPA68m2QAwbK8N8+eBzSPnb2LxcZAkaUomif4l4KEk70oSYBdwFjgJ7B/m7AeeGfZPAvuS3JNkK7ANOD3B9SVJK7R23BOr6vkkTwNfAW4ALwJHgXuBE0keY/EHw6PD/DNJTgAvD/MPVtXNCdcvSVqBsaMPUFWPA48vGb7O4l3/cvOPAEcmuaYkaXx+I1eSGjH6ktSI0ZekRoy+JDVi9CWpEaMvSY0YfUlqxOhLUiNGX5IaMfqS1IjRl6RGjL4kNWL0JakRoy9JjRh9SWrE6EtSI0Zfkhox+pLUiNGXpEaMviQ1YvQlqRGjL0mNGH1JasToS1IjRl+SGjH6ktSI0ZekRoy+JDUyUfSTfH+Sp5P8U5KzSX4qyX1Jnk1yftiuG5l/OMmFJOeS7J58+ZKklZj0Tv8PgC9W1fuAHwPOAoeAU1W1DTg1vCbJdmAfsAPYAzyZZM2E15ckrcDY0U/yHuBngE8DVNW3q+o/gb3AsWHaMeCRYX8vcLyqrlfVReACsHPc60uSVm6SO/0fBBaAP07yYpJPJXk3sL6qrgIM2weG+RuByyPnzw9jkqQpmST6a4EfBz5ZVR8A/pfhUc4tZJmxWnZiciDJXJK5hYWFCZYoSRo1SfTngfmqen54/TSLPwReTbIBYNheG5m/eeT8TcCV5d64qo5W1WxVzc7MzEywREnSqLGjX1X/ClxO8iPD0C7gZeAksH8Y2w88M+yfBPYluSfJVmAbcHrc60uSVm7thOf/GvDZJO8Avg58hMUfJCeSPAZcAh4FqKozSU6w+IPhBnCwqm5OeH1J0gpMFP2qegmYXebQrlvMPwIcmeSakqTx+Y1cSWrE6EtSI0Zfkhox+pLUiNGXpEaMviQ1YvQlqRGjL0mNGH1JasToS1IjRl+SGjH6ktSI0ZekRoy+JDVi9CWpEaMvSY0YfUlqxOhLUiNGX5IaMfqS1IjRl6RGjL4kNWL0JakRoy9JjRh9SWrE6EtSI0Zfkhox+pLUyMTRT7ImyYtJPj+8vi/Js0nOD9t1I3MPJ7mQ5FyS3ZNeW5K0MnfiTv9jwNmR14eAU1W1DTg1vCbJdmAfsAPYAzyZZM0duL4k6Q2aKPpJNgEPA58aGd4LHBv2jwGPjIwfr6rrVXURuADsnOT6kqSVmfRO//eB3wK+OzK2vqquAgzbB4bxjcDlkXnzw5gkaUrGjn6SXwSuVdULb/SUZcbqFu99IMlckrmFhYVxlyhJWmKSO/0PAr+U5BXgOPBzSf4MeDXJBoBhe22YPw9sHjl/E3BluTeuqqNVNVtVszMzMxMsUZI0auzoV9XhqtpUVVtY/AfaL1XVh4GTwP5h2n7gmWH/JLAvyT1JtgLbgNNjr1yStGJr34T3fAI4keQx4BLwKEBVnUlyAngZuAEcrKqbb8L1JUm3cEeiX1XPAc8N+/8G7LrFvCPAkTtxTUnSyvmNXElqxOhLUiNGX5IaMfqS1IjRl6RGjL4kNWL0JakRoy9JjRh9SWrE6EtSI0Zfkhox+pLUiNGXpEaMviQ1YvQlqRGjL0mNGH1JasToS1IjRl+SGjH6ktSI0ZekRoy+JDVi9CWpEaMvSY0YfUlqxOhLUiNGX5IaMfqS1MjY0U+yOcnfJDmb5EySjw3j9yV5Nsn5Ybtu5JzDSS4kOZdk9534D5AkvXGT3OnfAH6zqn4UeAg4mGQ7cAg4VVXbgFPDa4Zj+4AdwB7gySRrJlm8JGllxo5+VV2tqq8M+98CzgIbgb3AsWHaMeCRYX8vcLyqrlfVReACsHPc60uSVu6OPNNPsgX4APA8sL6qrsLiDwbggWHaRuDyyGnzw5gkaUomjn6Se4G/AD5eVf/9elOXGatbvOeBJHNJ5hYWFiZdoiRpMFH0k3wvi8H/bFV9bhh+NcmG4fgG4NowPg9sHjl9E3BlufetqqNVNVtVszMzM5MsUZI0Yu24JyYJ8GngbFV9YuTQSWA/8MSwfWZk/M+TfAJ4ENgGnB73+pLemC2HvrDaS7irvPLEw6u9hImMHX3gg8AvA19N8tIw9jssxv5EkseAS8CjAFV1JskJ4GUWP/lzsKpuTnB9SdIKjR39qvo7ln9OD7DrFuccAY6Me01J0mT8Rq4kNWL0JakRoy9JjRh9SWrE6EtSI0Zfkhox+pLUiNGXpEaMviQ1YvQlqRGjL0mNGH1JasToS1IjRl+SGjH6ktSI0ZekRoy+JDVi9CWpEaMvSY0YfUlqxOhLUiNGX5IaMfqS1IjRl6RGjL4kNWL0JakRoy9JjRh9SWrE6EtSI1OPfpI9Sc4luZDk0LSvL0mdTTX6SdYAfwT8ArAd+FCS7dNcgyR1Nu07/Z3Ahar6elV9GzgO7J3yGiSprbVTvt5G4PLI63ngJ5dOSnIAODC8/J8k56awtg7uB7652ou4nfzuaq9Aq8S/n3fWDyw3OO3oZ5mxes1A1VHg6Ju/nF6SzFXV7GqvQ1qOfz+nY9qPd+aBzSOvNwFXprwGSWpr2tH/MrAtydYk7wD2ASenvAZJamuqj3eq6kaSjwJ/BawBPlNVZ6a5huZ8ZKa3Mv9+TkGqXvNIXZJ0l/IbuZLUiNGXpEaMviQ1Mu3P6WuKkryPxW88b2Tx+xBXgJNVdXZVFyZp1Xinf5dK8tss/pqLAKdZ/LhsgKf8RXd6K0vykdVew93MT+/cpZL8M7Cjqr6zZPwdwJmq2rY6K5NeX5JLVfXe1V7H3crHO3ev7wIPAt9YMr5hOCatmiT/eKtDwPpprqUbo3/3+jhwKsl5/v+X3L0X+CHgo6u1KGmwHtgN/MeS8QB/P/3l9GH071JV9cUkP8zir7PeyOL/TPPAl6vq5qouToLPA/dW1UtLDyR5buqracRn+pLUiJ/ekaRGjL4kNWL0JakRoy9JjRh9SWrk/wDrS9SF+3XI3AAAAABJRU5ErkJggg==\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "df['Touchscreen'].value_counts().plot(kind='bar')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 39,
   "id": "d1b428b4",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:xlabel='Touchscreen', ylabel='Price'>"
      ]
     },
     "execution_count": 39,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.barplot(x=df['Touchscreen'],y=df['Price'])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 40,
   "id": "8580c689",
   "metadata": {},
   "outputs": [],
   "source": [
    "df['Ips'] = df['ScreenResolution'].apply(lambda x:1 if 'IPS' in x else 0)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 41,
   "id": "4fb51139",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Inches</th>\n",
       "      <th>ScreenResolution</th>\n",
       "      <th>Cpu</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>IPS Panel Retina Display 2560x1600</td>\n",
       "      <td>Intel Core i5 2.3GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>1440x900</td>\n",
       "      <td>Intel Core i5 1.8GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB Flash Storage</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>15.6</td>\n",
       "      <td>Full HD 1920x1080</td>\n",
       "      <td>Intel Core i5 7200U 2.5GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>15.4</td>\n",
       "      <td>IPS Panel Retina Display 2880x1800</td>\n",
       "      <td>Intel Core i7 2.7GHz</td>\n",
       "      <td>16</td>\n",
       "      <td>512GB SSD</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>IPS Panel Retina Display 2560x1600</td>\n",
       "      <td>Intel Core i5 3.1GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName  Inches                    ScreenResolution  \\\n",
       "0   Apple  Ultrabook    13.3  IPS Panel Retina Display 2560x1600   \n",
       "1   Apple  Ultrabook    13.3                            1440x900   \n",
       "2      HP   Notebook    15.6                   Full HD 1920x1080   \n",
       "3   Apple  Ultrabook    15.4  IPS Panel Retina Display 2880x1800   \n",
       "4   Apple  Ultrabook    13.3  IPS Panel Retina Display 2560x1600   \n",
       "\n",
       "                          Cpu  Ram               Memory  \\\n",
       "0        Intel Core i5 2.3GHz    8            128GB SSD   \n",
       "1        Intel Core i5 1.8GHz    8  128GB Flash Storage   \n",
       "2  Intel Core i5 7200U 2.5GHz    8            256GB SSD   \n",
       "3        Intel Core i7 2.7GHz   16            512GB SSD   \n",
       "4        Intel Core i5 3.1GHz    8            256GB SSD   \n",
       "\n",
       "                            Gpu  OpSys  Weight        Price  Touchscreen  Ips  \n",
       "0  Intel Iris Plus Graphics 640  macOS    1.37   71378.6832            0    1  \n",
       "1        Intel HD Graphics 6000  macOS    1.34   47895.5232            0    0  \n",
       "2         Intel HD Graphics 620  No OS    1.86   30636.0000            0    0  \n",
       "3            AMD Radeon Pro 455  macOS    1.83  135195.3360            0    1  \n",
       "4  Intel Iris Plus Graphics 650  macOS    1.37   96095.8080            0    1  "
      ]
     },
     "execution_count": 41,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 42,
   "id": "44ef7296",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:>"
      ]
     },
     "execution_count": 42,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "df['Ips'].value_counts().plot(kind='bar')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 43,
   "id": "b8fd50ed",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:xlabel='Ips', ylabel='Price'>"
      ]
     },
     "execution_count": 43,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.barplot(x=df['Ips'],y=df['Price'])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 47,
   "id": "b0cee465",
   "metadata": {},
   "outputs": [],
   "source": [
    "new = df['ScreenResolution'].str.split('x',n=1,expand=True)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 48,
   "id": "a84439f0",
   "metadata": {},
   "outputs": [],
   "source": [
    "df['X_res'] = new[0]\n",
    "df['Y_res'] = new[1]"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 50,
   "id": "8a36d2c6",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Inches</th>\n",
       "      <th>ScreenResolution</th>\n",
       "      <th>Cpu</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>X_res</th>\n",
       "      <th>Y_res</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>141</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>14.0</td>\n",
       "      <td>IPS Panel Full HD 1920x1080</td>\n",
       "      <td>Intel Core i5 8250U 1.6GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>AMD Radeon RX 550</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>1.75</td>\n",
       "      <td>59461.5456</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>IPS Panel Full HD 1920</td>\n",
       "      <td>1080</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1055</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>15.6</td>\n",
       "      <td>1366x768</td>\n",
       "      <td>Intel Core i3 6100U 2.3GHz</td>\n",
       "      <td>4</td>\n",
       "      <td>500GB HDD</td>\n",
       "      <td>Intel HD Graphics 520</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>2.31</td>\n",
       "      <td>37570.3920</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1366</td>\n",
       "      <td>768</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>75</th>\n",
       "      <td>Asus</td>\n",
       "      <td>Gaming</td>\n",
       "      <td>15.6</td>\n",
       "      <td>Full HD 1920x1080</td>\n",
       "      <td>Intel Core i7 7700HQ 2.8GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>1TB HDD</td>\n",
       "      <td>Nvidia GeForce GTX 1050</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>2.20</td>\n",
       "      <td>50562.7200</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Full HD 1920</td>\n",
       "      <td>1080</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>984</th>\n",
       "      <td>Toshiba</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>14.0</td>\n",
       "      <td>1366x768</td>\n",
       "      <td>Intel Core i5 6200U 2.3GHz</td>\n",
       "      <td>4</td>\n",
       "      <td>500GB HDD</td>\n",
       "      <td>Intel HD Graphics 520</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>1.75</td>\n",
       "      <td>48751.2000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1366</td>\n",
       "      <td>768</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>337</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>15.6</td>\n",
       "      <td>Full HD 1920x1080</td>\n",
       "      <td>Intel Core i5 7200U 2.5GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>1.84</td>\n",
       "      <td>60952.3200</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Full HD 1920</td>\n",
       "      <td>1080</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "      Company  TypeName  Inches             ScreenResolution  \\\n",
       "141    Lenovo  Notebook    14.0  IPS Panel Full HD 1920x1080   \n",
       "1055       HP  Notebook    15.6                     1366x768   \n",
       "75       Asus    Gaming    15.6            Full HD 1920x1080   \n",
       "984   Toshiba  Notebook    14.0                     1366x768   \n",
       "337        HP  Notebook    15.6            Full HD 1920x1080   \n",
       "\n",
       "                              Cpu  Ram     Memory                      Gpu  \\\n",
       "141    Intel Core i5 8250U 1.6GHz    8  256GB SSD        AMD Radeon RX 550   \n",
       "1055   Intel Core i3 6100U 2.3GHz    4  500GB HDD    Intel HD Graphics 520   \n",
       "75    Intel Core i7 7700HQ 2.8GHz    8    1TB HDD  Nvidia GeForce GTX 1050   \n",
       "984    Intel Core i5 6200U 2.3GHz    4  500GB HDD    Intel HD Graphics 520   \n",
       "337    Intel Core i5 7200U 2.5GHz    8  256GB SSD    Intel HD Graphics 620   \n",
       "\n",
       "           OpSys  Weight       Price  Touchscreen  Ips  \\\n",
       "141   Windows 10    1.75  59461.5456            0    1   \n",
       "1055  Windows 10    2.31  37570.3920            0    0   \n",
       "75    Windows 10    2.20  50562.7200            0    0   \n",
       "984   Windows 10    1.75  48751.2000            0    0   \n",
       "337   Windows 10    1.84  60952.3200            0    0   \n",
       "\n",
       "                       X_res Y_res  \n",
       "141   IPS Panel Full HD 1920  1080  \n",
       "1055                    1366   768  \n",
       "75              Full HD 1920  1080  \n",
       "984                     1366   768  \n",
       "337             Full HD 1920  1080  "
      ]
     },
     "execution_count": 50,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.sample(5)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 59,
   "id": "7e34b4df",
   "metadata": {},
   "outputs": [],
   "source": [
    "df['X_res'] = df['X_res'].str.replace(',','').str.findall(r'(\\d+\\.?\\d+)').apply(lambda x:x[0])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 60,
   "id": "ea8467a9",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Inches</th>\n",
       "      <th>ScreenResolution</th>\n",
       "      <th>Cpu</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>X_res</th>\n",
       "      <th>Y_res</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>IPS Panel Retina Display 2560x1600</td>\n",
       "      <td>Intel Core i5 2.3GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>2560</td>\n",
       "      <td>1600</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>1440x900</td>\n",
       "      <td>Intel Core i5 1.8GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB Flash Storage</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1440</td>\n",
       "      <td>900</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>15.6</td>\n",
       "      <td>Full HD 1920x1080</td>\n",
       "      <td>Intel Core i5 7200U 2.5GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1920</td>\n",
       "      <td>1080</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>15.4</td>\n",
       "      <td>IPS Panel Retina Display 2880x1800</td>\n",
       "      <td>Intel Core i7 2.7GHz</td>\n",
       "      <td>16</td>\n",
       "      <td>512GB SSD</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>2880</td>\n",
       "      <td>1800</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>IPS Panel Retina Display 2560x1600</td>\n",
       "      <td>Intel Core i5 3.1GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>2560</td>\n",
       "      <td>1600</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName  Inches                    ScreenResolution  \\\n",
       "0   Apple  Ultrabook    13.3  IPS Panel Retina Display 2560x1600   \n",
       "1   Apple  Ultrabook    13.3                            1440x900   \n",
       "2      HP   Notebook    15.6                   Full HD 1920x1080   \n",
       "3   Apple  Ultrabook    15.4  IPS Panel Retina Display 2880x1800   \n",
       "4   Apple  Ultrabook    13.3  IPS Panel Retina Display 2560x1600   \n",
       "\n",
       "                          Cpu  Ram               Memory  \\\n",
       "0        Intel Core i5 2.3GHz    8            128GB SSD   \n",
       "1        Intel Core i5 1.8GHz    8  128GB Flash Storage   \n",
       "2  Intel Core i5 7200U 2.5GHz    8            256GB SSD   \n",
       "3        Intel Core i7 2.7GHz   16            512GB SSD   \n",
       "4        Intel Core i5 3.1GHz    8            256GB SSD   \n",
       "\n",
       "                            Gpu  OpSys  Weight        Price  Touchscreen  Ips  \\\n",
       "0  Intel Iris Plus Graphics 640  macOS    1.37   71378.6832            0    1   \n",
       "1        Intel HD Graphics 6000  macOS    1.34   47895.5232            0    0   \n",
       "2         Intel HD Graphics 620  No OS    1.86   30636.0000            0    0   \n",
       "3            AMD Radeon Pro 455  macOS    1.83  135195.3360            0    1   \n",
       "4  Intel Iris Plus Graphics 650  macOS    1.37   96095.8080            0    1   \n",
       "\n",
       "  X_res Y_res  \n",
       "0  2560  1600  \n",
       "1  1440   900  \n",
       "2  1920  1080  \n",
       "3  2880  1800  \n",
       "4  2560  1600  "
      ]
     },
     "execution_count": 60,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 62,
   "id": "dcb9da28",
   "metadata": {},
   "outputs": [],
   "source": [
    "df['X_res'] = df['X_res'].astype('int')\n",
    "df['Y_res'] = df['Y_res'].astype('int')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 63,
   "id": "e9020c73",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "<class 'pandas.core.frame.DataFrame'>\n",
      "RangeIndex: 1303 entries, 0 to 1302\n",
      "Data columns (total 15 columns):\n",
      " #   Column            Non-Null Count  Dtype  \n",
      "---  ------            --------------  -----  \n",
      " 0   Company           1303 non-null   object \n",
      " 1   TypeName          1303 non-null   object \n",
      " 2   Inches            1303 non-null   float64\n",
      " 3   ScreenResolution  1303 non-null   object \n",
      " 4   Cpu               1303 non-null   object \n",
      " 5   Ram               1303 non-null   int32  \n",
      " 6   Memory            1303 non-null   object \n",
      " 7   Gpu               1303 non-null   object \n",
      " 8   OpSys             1303 non-null   object \n",
      " 9   Weight            1303 non-null   float32\n",
      " 10  Price             1303 non-null   float64\n",
      " 11  Touchscreen       1303 non-null   int64  \n",
      " 12  Ips               1303 non-null   int64  \n",
      " 13  X_res             1303 non-null   int32  \n",
      " 14  Y_res             1303 non-null   int32  \n",
      "dtypes: float32(1), float64(2), int32(3), int64(2), object(7)\n",
      "memory usage: 132.5+ KB\n"
     ]
    }
   ],
   "source": [
    "df.info()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 65,
   "id": "f7e12f23",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "Inches         0.068197\n",
       "Ram            0.743007\n",
       "Weight         0.210370\n",
       "Price          1.000000\n",
       "Touchscreen    0.191226\n",
       "Ips            0.252208\n",
       "X_res          0.556529\n",
       "Y_res          0.552809\n",
       "Name: Price, dtype: float64"
      ]
     },
     "execution_count": 65,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.corr()['Price']"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 68,
   "id": "dbd95a94",
   "metadata": {},
   "outputs": [],
   "source": [
    "df['ppi'] = (((df['X_res']**2) + (df['Y_res']**2))**0.5/df['Inches']).astype('float')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 69,
   "id": "98975041",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "Inches         0.068197\n",
       "Ram            0.743007\n",
       "Weight         0.210370\n",
       "Price          1.000000\n",
       "Touchscreen    0.191226\n",
       "Ips            0.252208\n",
       "X_res          0.556529\n",
       "Y_res          0.552809\n",
       "ppi            0.473487\n",
       "Name: Price, dtype: float64"
      ]
     },
     "execution_count": 69,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.corr()['Price']"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 70,
   "id": "43a9d35d",
   "metadata": {},
   "outputs": [],
   "source": [
    "df.drop(columns=['ScreenResolution'],inplace=True)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 71,
   "id": "5a9b5380",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Inches</th>\n",
       "      <th>Cpu</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>X_res</th>\n",
       "      <th>Y_res</th>\n",
       "      <th>ppi</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>Intel Core i5 2.3GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>2560</td>\n",
       "      <td>1600</td>\n",
       "      <td>226.983005</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>Intel Core i5 1.8GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB Flash Storage</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1440</td>\n",
       "      <td>900</td>\n",
       "      <td>127.677940</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>15.6</td>\n",
       "      <td>Intel Core i5 7200U 2.5GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>1920</td>\n",
       "      <td>1080</td>\n",
       "      <td>141.211998</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>15.4</td>\n",
       "      <td>Intel Core i7 2.7GHz</td>\n",
       "      <td>16</td>\n",
       "      <td>512GB SSD</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>2880</td>\n",
       "      <td>1800</td>\n",
       "      <td>220.534624</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>13.3</td>\n",
       "      <td>Intel Core i5 3.1GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>2560</td>\n",
       "      <td>1600</td>\n",
       "      <td>226.983005</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName  Inches                         Cpu  Ram  \\\n",
       "0   Apple  Ultrabook    13.3        Intel Core i5 2.3GHz    8   \n",
       "1   Apple  Ultrabook    13.3        Intel Core i5 1.8GHz    8   \n",
       "2      HP   Notebook    15.6  Intel Core i5 7200U 2.5GHz    8   \n",
       "3   Apple  Ultrabook    15.4        Intel Core i7 2.7GHz   16   \n",
       "4   Apple  Ultrabook    13.3        Intel Core i5 3.1GHz    8   \n",
       "\n",
       "                Memory                           Gpu  OpSys  Weight  \\\n",
       "0            128GB SSD  Intel Iris Plus Graphics 640  macOS    1.37   \n",
       "1  128GB Flash Storage        Intel HD Graphics 6000  macOS    1.34   \n",
       "2            256GB SSD         Intel HD Graphics 620  No OS    1.86   \n",
       "3            512GB SSD            AMD Radeon Pro 455  macOS    1.83   \n",
       "4            256GB SSD  Intel Iris Plus Graphics 650  macOS    1.37   \n",
       "\n",
       "         Price  Touchscreen  Ips  X_res  Y_res         ppi  \n",
       "0   71378.6832            0    1   2560   1600  226.983005  \n",
       "1   47895.5232            0    0   1440    900  127.677940  \n",
       "2   30636.0000            0    0   1920   1080  141.211998  \n",
       "3  135195.3360            0    1   2880   1800  220.534624  \n",
       "4   96095.8080            0    1   2560   1600  226.983005  "
      ]
     },
     "execution_count": 71,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 72,
   "id": "ef361f90",
   "metadata": {},
   "outputs": [],
   "source": [
    "df.drop(columns=['Inches','X_res','Y_res'],inplace=True)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 73,
   "id": "2d327aa0",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Cpu</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>Intel Core i5 2.3GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>Intel Core i5 1.8GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB Flash Storage</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>127.677940</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>Intel Core i5 7200U 2.5GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>Intel Core i7 2.7GHz</td>\n",
       "      <td>16</td>\n",
       "      <td>512GB SSD</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>220.534624</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>Intel Core i5 3.1GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName                         Cpu  Ram               Memory  \\\n",
       "0   Apple  Ultrabook        Intel Core i5 2.3GHz    8            128GB SSD   \n",
       "1   Apple  Ultrabook        Intel Core i5 1.8GHz    8  128GB Flash Storage   \n",
       "2      HP   Notebook  Intel Core i5 7200U 2.5GHz    8            256GB SSD   \n",
       "3   Apple  Ultrabook        Intel Core i7 2.7GHz   16            512GB SSD   \n",
       "4   Apple  Ultrabook        Intel Core i5 3.1GHz    8            256GB SSD   \n",
       "\n",
       "                            Gpu  OpSys  Weight        Price  Touchscreen  Ips  \\\n",
       "0  Intel Iris Plus Graphics 640  macOS    1.37   71378.6832            0    1   \n",
       "1        Intel HD Graphics 6000  macOS    1.34   47895.5232            0    0   \n",
       "2         Intel HD Graphics 620  No OS    1.86   30636.0000            0    0   \n",
       "3            AMD Radeon Pro 455  macOS    1.83  135195.3360            0    1   \n",
       "4  Intel Iris Plus Graphics 650  macOS    1.37   96095.8080            0    1   \n",
       "\n",
       "          ppi  \n",
       "0  226.983005  \n",
       "1  127.677940  \n",
       "2  141.211998  \n",
       "3  220.534624  \n",
       "4  226.983005  "
      ]
     },
     "execution_count": 73,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 74,
   "id": "81f9ec40",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "Intel Core i5 7200U 2.5GHz              190\n",
       "Intel Core i7 7700HQ 2.8GHz             146\n",
       "Intel Core i7 7500U 2.7GHz              134\n",
       "Intel Core i7 8550U 1.8GHz               73\n",
       "Intel Core i5 8250U 1.6GHz               72\n",
       "                                       ... \n",
       "Intel Celeron Quad Core N3710 1.6GHz      1\n",
       "Intel Core i5 7200U 2.7GHz                1\n",
       "Intel Pentium Dual Core N4200 1.1GHz      1\n",
       "AMD FX 8800P 2.1GHz                       1\n",
       "Intel Atom x5-Z8300 1.44GHz               1\n",
       "Name: Cpu, Length: 118, dtype: int64"
      ]
     },
     "execution_count": 74,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df['Cpu'].value_counts()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 79,
   "id": "34ce8f2c",
   "metadata": {},
   "outputs": [],
   "source": [
    "df['Cpu Name'] = df['Cpu'].apply(lambda x:\" \".join(x.split()[0:3]))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 80,
   "id": "8928f81c",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Cpu</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu Name</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>Intel Core i5 2.3GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>Intel Core i5 1.8GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB Flash Storage</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>127.677940</td>\n",
       "      <td>Intel Core i5</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>Intel Core i5 7200U 2.5GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>Intel Core i7 2.7GHz</td>\n",
       "      <td>16</td>\n",
       "      <td>512GB SSD</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>220.534624</td>\n",
       "      <td>Intel Core i7</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>Intel Core i5 3.1GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName                         Cpu  Ram               Memory  \\\n",
       "0   Apple  Ultrabook        Intel Core i5 2.3GHz    8            128GB SSD   \n",
       "1   Apple  Ultrabook        Intel Core i5 1.8GHz    8  128GB Flash Storage   \n",
       "2      HP   Notebook  Intel Core i5 7200U 2.5GHz    8            256GB SSD   \n",
       "3   Apple  Ultrabook        Intel Core i7 2.7GHz   16            512GB SSD   \n",
       "4   Apple  Ultrabook        Intel Core i5 3.1GHz    8            256GB SSD   \n",
       "\n",
       "                            Gpu  OpSys  Weight        Price  Touchscreen  Ips  \\\n",
       "0  Intel Iris Plus Graphics 640  macOS    1.37   71378.6832            0    1   \n",
       "1        Intel HD Graphics 6000  macOS    1.34   47895.5232            0    0   \n",
       "2         Intel HD Graphics 620  No OS    1.86   30636.0000            0    0   \n",
       "3            AMD Radeon Pro 455  macOS    1.83  135195.3360            0    1   \n",
       "4  Intel Iris Plus Graphics 650  macOS    1.37   96095.8080            0    1   \n",
       "\n",
       "          ppi       Cpu Name  \n",
       "0  226.983005  Intel Core i5  \n",
       "1  127.677940  Intel Core i5  \n",
       "2  141.211998  Intel Core i5  \n",
       "3  220.534624  Intel Core i7  \n",
       "4  226.983005  Intel Core i5  "
      ]
     },
     "execution_count": 80,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 81,
   "id": "5a23ed7d",
   "metadata": {},
   "outputs": [],
   "source": [
    "def fetch_processor(text):\n",
    "    if text == 'Intel Core i7' or text == 'Intel Core i5' or text == 'Intel Core i3':\n",
    "        return text\n",
    "    else:\n",
    "        if text.split()[0] == 'Intel':\n",
    "            return 'Other Intel Processor'\n",
    "        else:\n",
    "            return 'AMD Processor'"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 82,
   "id": "224c21db",
   "metadata": {},
   "outputs": [],
   "source": [
    "df['Cpu brand'] = df['Cpu Name'].apply(fetch_processor)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 83,
   "id": "c3c72072",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Cpu</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu Name</th>\n",
       "      <th>Cpu brand</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>Intel Core i5 2.3GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>Intel Core i5</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>Intel Core i5 1.8GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB Flash Storage</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>127.677940</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>Intel Core i5</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>Intel Core i5 7200U 2.5GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>Intel Core i5</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>Intel Core i7 2.7GHz</td>\n",
       "      <td>16</td>\n",
       "      <td>512GB SSD</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>220.534624</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>Intel Core i7</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>Intel Core i5 3.1GHz</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>Intel Core i5</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName                         Cpu  Ram               Memory  \\\n",
       "0   Apple  Ultrabook        Intel Core i5 2.3GHz    8            128GB SSD   \n",
       "1   Apple  Ultrabook        Intel Core i5 1.8GHz    8  128GB Flash Storage   \n",
       "2      HP   Notebook  Intel Core i5 7200U 2.5GHz    8            256GB SSD   \n",
       "3   Apple  Ultrabook        Intel Core i7 2.7GHz   16            512GB SSD   \n",
       "4   Apple  Ultrabook        Intel Core i5 3.1GHz    8            256GB SSD   \n",
       "\n",
       "                            Gpu  OpSys  Weight        Price  Touchscreen  Ips  \\\n",
       "0  Intel Iris Plus Graphics 640  macOS    1.37   71378.6832            0    1   \n",
       "1        Intel HD Graphics 6000  macOS    1.34   47895.5232            0    0   \n",
       "2         Intel HD Graphics 620  No OS    1.86   30636.0000            0    0   \n",
       "3            AMD Radeon Pro 455  macOS    1.83  135195.3360            0    1   \n",
       "4  Intel Iris Plus Graphics 650  macOS    1.37   96095.8080            0    1   \n",
       "\n",
       "          ppi       Cpu Name      Cpu brand  \n",
       "0  226.983005  Intel Core i5  Intel Core i5  \n",
       "1  127.677940  Intel Core i5  Intel Core i5  \n",
       "2  141.211998  Intel Core i5  Intel Core i5  \n",
       "3  220.534624  Intel Core i7  Intel Core i7  \n",
       "4  226.983005  Intel Core i5  Intel Core i5  "
      ]
     },
     "execution_count": 83,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 84,
   "id": "bdc8ec9f",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:>"
      ]
     },
     "execution_count": 84,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "df['Cpu brand'].value_counts().plot(kind='bar')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 87,
   "id": "1a8350f0",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.barplot(x=df['Cpu brand'],y=df['Price'])\n",
    "plt.xticks(rotation='vertical')\n",
    "plt.show()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 88,
   "id": "fc54795b",
   "metadata": {},
   "outputs": [],
   "source": [
    "df.drop(columns=['Cpu','Cpu Name'],inplace=True)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 89,
   "id": "367e9992",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu brand</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>128GB Flash Storage</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>127.677940</td>\n",
       "      <td>Intel Core i5</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>16</td>\n",
       "      <td>512GB SSD</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>220.534624</td>\n",
       "      <td>Intel Core i7</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>256GB SSD</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName  Ram               Memory                           Gpu  \\\n",
       "0   Apple  Ultrabook    8            128GB SSD  Intel Iris Plus Graphics 640   \n",
       "1   Apple  Ultrabook    8  128GB Flash Storage        Intel HD Graphics 6000   \n",
       "2      HP   Notebook    8            256GB SSD         Intel HD Graphics 620   \n",
       "3   Apple  Ultrabook   16            512GB SSD            AMD Radeon Pro 455   \n",
       "4   Apple  Ultrabook    8            256GB SSD  Intel Iris Plus Graphics 650   \n",
       "\n",
       "   OpSys  Weight        Price  Touchscreen  Ips         ppi      Cpu brand  \n",
       "0  macOS    1.37   71378.6832            0    1  226.983005  Intel Core i5  \n",
       "1  macOS    1.34   47895.5232            0    0  127.677940  Intel Core i5  \n",
       "2  No OS    1.86   30636.0000            0    0  141.211998  Intel Core i5  \n",
       "3  macOS    1.83  135195.3360            0    1  220.534624  Intel Core i7  \n",
       "4  macOS    1.37   96095.8080            0    1  226.983005  Intel Core i5  "
      ]
     },
     "execution_count": 89,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 90,
   "id": "b6cd52b7",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:>"
      ]
     },
     "execution_count": 90,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "df['Ram'].value_counts().plot(kind='bar')"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 91,
   "id": "ca0e2e0b",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.barplot(x=df['Ram'],y=df['Price'])\n",
    "plt.xticks(rotation='vertical')\n",
    "plt.show()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 92,
   "id": "c4a1224b",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "256GB SSD                        412\n",
       "1TB HDD                          223\n",
       "500GB HDD                        132\n",
       "512GB SSD                        118\n",
       "128GB SSD +  1TB HDD              94\n",
       "128GB SSD                         76\n",
       "256GB SSD +  1TB HDD              73\n",
       "32GB Flash Storage                38\n",
       "2TB HDD                           16\n",
       "64GB Flash Storage                15\n",
       "512GB SSD +  1TB HDD              14\n",
       "1TB SSD                           14\n",
       "256GB SSD +  2TB HDD              10\n",
       "1.0TB Hybrid                       9\n",
       "256GB Flash Storage                8\n",
       "16GB Flash Storage                 7\n",
       "32GB SSD                           6\n",
       "180GB SSD                          5\n",
       "128GB Flash Storage                4\n",
       "16GB SSD                           3\n",
       "512GB SSD +  2TB HDD               3\n",
       "256GB SSD +  256GB SSD             2\n",
       "128GB SSD +  2TB HDD               2\n",
       "256GB SSD +  500GB HDD             2\n",
       "512GB Flash Storage                2\n",
       "1TB SSD +  1TB HDD                 2\n",
       "32GB HDD                           1\n",
       "64GB SSD                           1\n",
       "1.0TB HDD                          1\n",
       "512GB SSD +  256GB SSD             1\n",
       "512GB SSD +  1.0TB Hybrid          1\n",
       "8GB SSD                            1\n",
       "240GB SSD                          1\n",
       "128GB HDD                          1\n",
       "1TB HDD +  1TB HDD                 1\n",
       "512GB SSD +  512GB SSD             1\n",
       "256GB SSD +  1.0TB Hybrid          1\n",
       "508GB Hybrid                       1\n",
       "64GB Flash Storage +  1TB HDD      1\n",
       "Name: Memory, dtype: int64"
      ]
     },
     "execution_count": 92,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df['Memory'].value_counts()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 93,
   "id": "2391ad9b",
   "metadata": {},
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "<ipython-input-93-10829db803de>:16: FutureWarning: The default value of regex will change from True to False in a future version.\n",
      "  df['first'] = df['first'].str.replace(r'\\D', '')\n",
      "<ipython-input-93-10829db803de>:25: FutureWarning: The default value of regex will change from True to False in a future version.\n",
      "  df['second'] = df['second'].str.replace(r'\\D', '')\n"
     ]
    }
   ],
   "source": [
    "df['Memory'] = df['Memory'].astype(str).replace('\\.0', '', regex=True)\n",
    "df[\"Memory\"] = df[\"Memory\"].str.replace('GB', '')\n",
    "df[\"Memory\"] = df[\"Memory\"].str.replace('TB', '000')\n",
    "new = df[\"Memory\"].str.split(\"+\", n = 1, expand = True)\n",
    "\n",
    "df[\"first\"]= new[0]\n",
    "df[\"first\"]=df[\"first\"].str.strip()\n",
    "\n",
    "df[\"second\"]= new[1]\n",
    "\n",
    "df[\"Layer1HDD\"] = df[\"first\"].apply(lambda x: 1 if \"HDD\" in x else 0)\n",
    "df[\"Layer1SSD\"] = df[\"first\"].apply(lambda x: 1 if \"SSD\" in x else 0)\n",
    "df[\"Layer1Hybrid\"] = df[\"first\"].apply(lambda x: 1 if \"Hybrid\" in x else 0)\n",
    "df[\"Layer1Flash_Storage\"] = df[\"first\"].apply(lambda x: 1 if \"Flash Storage\" in x else 0)\n",
    "\n",
    "df['first'] = df['first'].str.replace(r'\\D', '')\n",
    "\n",
    "df[\"second\"].fillna(\"0\", inplace = True)\n",
    "\n",
    "df[\"Layer2HDD\"] = df[\"second\"].apply(lambda x: 1 if \"HDD\" in x else 0)\n",
    "df[\"Layer2SSD\"] = df[\"second\"].apply(lambda x: 1 if \"SSD\" in x else 0)\n",
    "df[\"Layer2Hybrid\"] = df[\"second\"].apply(lambda x: 1 if \"Hybrid\" in x else 0)\n",
    "df[\"Layer2Flash_Storage\"] = df[\"second\"].apply(lambda x: 1 if \"Flash Storage\" in x else 0)\n",
    "\n",
    "df['second'] = df['second'].str.replace(r'\\D', '')\n",
    "\n",
    "df[\"first\"] = df[\"first\"].astype(int)\n",
    "df[\"second\"] = df[\"second\"].astype(int)\n",
    "\n",
    "df[\"HDD\"]=(df[\"first\"]*df[\"Layer1HDD\"]+df[\"second\"]*df[\"Layer2HDD\"])\n",
    "df[\"SSD\"]=(df[\"first\"]*df[\"Layer1SSD\"]+df[\"second\"]*df[\"Layer2SSD\"])\n",
    "df[\"Hybrid\"]=(df[\"first\"]*df[\"Layer1Hybrid\"]+df[\"second\"]*df[\"Layer2Hybrid\"])\n",
    "df[\"Flash_Storage\"]=(df[\"first\"]*df[\"Layer1Flash_Storage\"]+df[\"second\"]*df[\"Layer2Flash_Storage\"])\n",
    "\n",
    "df.drop(columns=['first', 'second', 'Layer1HDD', 'Layer1SSD', 'Layer1Hybrid',\n",
    "       'Layer1Flash_Storage', 'Layer2HDD', 'Layer2SSD', 'Layer2Hybrid',\n",
    "       'Layer2Flash_Storage'],inplace=True)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 98,
   "id": "919f2130",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Memory</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu brand</th>\n",
       "      <th>HDD</th>\n",
       "      <th>SSD</th>\n",
       "      <th>Hybrid</th>\n",
       "      <th>Flash_Storage</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>1247</th>\n",
       "      <td>Asus</td>\n",
       "      <td>Gaming</td>\n",
       "      <td>16</td>\n",
       "      <td>256 SSD +  1000 HDD</td>\n",
       "      <td>Nvidia GeForce GTX 1070</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>2.34</td>\n",
       "      <td>123876.000</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>1000</td>\n",
       "      <td>256</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>505</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>256 SSD</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>1.44</td>\n",
       "      <td>50562.720</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>165.632118</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>820</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>4</td>\n",
       "      <td>500 HDD</td>\n",
       "      <td>Intel HD Graphics 520</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>2.10</td>\n",
       "      <td>26101.872</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>Intel Core i3</td>\n",
       "      <td>500</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>21</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>Gaming</td>\n",
       "      <td>8</td>\n",
       "      <td>128 SSD +  1000 HDD</td>\n",
       "      <td>Nvidia GeForce GTX 1050</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>2.50</td>\n",
       "      <td>53226.720</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>1000</td>\n",
       "      <td>128</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>301</th>\n",
       "      <td>Asus</td>\n",
       "      <td>Gaming</td>\n",
       "      <td>16</td>\n",
       "      <td>256 SSD +  1000 HDD</td>\n",
       "      <td>Nvidia GeForce GTX 1070</td>\n",
       "      <td>Windows 10</td>\n",
       "      <td>2.90</td>\n",
       "      <td>113060.160</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>127.335675</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>1000</td>\n",
       "      <td>256</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "     Company  TypeName  Ram               Memory                      Gpu  \\\n",
       "1247    Asus    Gaming   16  256 SSD +  1000 HDD  Nvidia GeForce GTX 1070   \n",
       "505   Lenovo  Notebook    8              256 SSD    Intel HD Graphics 620   \n",
       "820   Lenovo  Notebook    4              500 HDD    Intel HD Graphics 520   \n",
       "21    Lenovo    Gaming    8  128 SSD +  1000 HDD  Nvidia GeForce GTX 1050   \n",
       "301     Asus    Gaming   16  256 SSD +  1000 HDD  Nvidia GeForce GTX 1070   \n",
       "\n",
       "           OpSys  Weight       Price  Touchscreen  Ips         ppi  \\\n",
       "1247  Windows 10    2.34  123876.000            0    1  141.211998   \n",
       "505   Windows 10    1.44   50562.720            0    0  165.632118   \n",
       "820   Windows 10    2.10   26101.872            0    0  100.454670   \n",
       "21    Windows 10    2.50   53226.720            0    1  141.211998   \n",
       "301   Windows 10    2.90  113060.160            0    0  127.335675   \n",
       "\n",
       "          Cpu brand   HDD  SSD  Hybrid  Flash_Storage  \n",
       "1247  Intel Core i7  1000  256       0              0  \n",
       "505   Intel Core i5     0  256       0              0  \n",
       "820   Intel Core i3   500    0       0              0  \n",
       "21    Intel Core i5  1000  128       0              0  \n",
       "301   Intel Core i7  1000  256       0              0  "
      ]
     },
     "execution_count": 98,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.sample(5)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 99,
   "id": "79b1c60f",
   "metadata": {},
   "outputs": [],
   "source": [
    "df.drop(columns=['Memory'],inplace=True)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 100,
   "id": "cf1a2da5",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu brand</th>\n",
       "      <th>HDD</th>\n",
       "      <th>SSD</th>\n",
       "      <th>Hybrid</th>\n",
       "      <th>Flash_Storage</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>128</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>127.677940</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>128</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>16</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>220.534624</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>512</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName  Ram                           Gpu  OpSys  Weight  \\\n",
       "0   Apple  Ultrabook    8  Intel Iris Plus Graphics 640  macOS    1.37   \n",
       "1   Apple  Ultrabook    8        Intel HD Graphics 6000  macOS    1.34   \n",
       "2      HP   Notebook    8         Intel HD Graphics 620  No OS    1.86   \n",
       "3   Apple  Ultrabook   16            AMD Radeon Pro 455  macOS    1.83   \n",
       "4   Apple  Ultrabook    8  Intel Iris Plus Graphics 650  macOS    1.37   \n",
       "\n",
       "         Price  Touchscreen  Ips         ppi      Cpu brand  HDD  SSD  Hybrid  \\\n",
       "0   71378.6832            0    1  226.983005  Intel Core i5    0  128       0   \n",
       "1   47895.5232            0    0  127.677940  Intel Core i5    0    0       0   \n",
       "2   30636.0000            0    0  141.211998  Intel Core i5    0  256       0   \n",
       "3  135195.3360            0    1  220.534624  Intel Core i7    0  512       0   \n",
       "4   96095.8080            0    1  226.983005  Intel Core i5    0  256       0   \n",
       "\n",
       "   Flash_Storage  \n",
       "0              0  \n",
       "1            128  \n",
       "2              0  \n",
       "3              0  \n",
       "4              0  "
      ]
     },
     "execution_count": 100,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 101,
   "id": "a0797800",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "Ram              0.743007\n",
       "Weight           0.210370\n",
       "Price            1.000000\n",
       "Touchscreen      0.191226\n",
       "Ips              0.252208\n",
       "ppi              0.473487\n",
       "HDD             -0.096441\n",
       "SSD              0.670799\n",
       "Hybrid           0.007989\n",
       "Flash_Storage   -0.040511\n",
       "Name: Price, dtype: float64"
      ]
     },
     "execution_count": 101,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.corr()['Price']"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 102,
   "id": "845e8723",
   "metadata": {},
   "outputs": [],
   "source": [
    "df.drop(columns=['Hybrid','Flash_Storage'],inplace=True)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 103,
   "id": "5e069ba6",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu brand</th>\n",
       "      <th>HDD</th>\n",
       "      <th>SSD</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>128</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>127.677940</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>16</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>220.534624</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>512</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName  Ram                           Gpu  OpSys  Weight  \\\n",
       "0   Apple  Ultrabook    8  Intel Iris Plus Graphics 640  macOS    1.37   \n",
       "1   Apple  Ultrabook    8        Intel HD Graphics 6000  macOS    1.34   \n",
       "2      HP   Notebook    8         Intel HD Graphics 620  No OS    1.86   \n",
       "3   Apple  Ultrabook   16            AMD Radeon Pro 455  macOS    1.83   \n",
       "4   Apple  Ultrabook    8  Intel Iris Plus Graphics 650  macOS    1.37   \n",
       "\n",
       "         Price  Touchscreen  Ips         ppi      Cpu brand  HDD  SSD  \n",
       "0   71378.6832            0    1  226.983005  Intel Core i5    0  128  \n",
       "1   47895.5232            0    0  127.677940  Intel Core i5    0    0  \n",
       "2   30636.0000            0    0  141.211998  Intel Core i5    0  256  \n",
       "3  135195.3360            0    1  220.534624  Intel Core i7    0  512  \n",
       "4   96095.8080            0    1  226.983005  Intel Core i5    0  256  "
      ]
     },
     "execution_count": 103,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 104,
   "id": "65722933",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "Intel HD Graphics 620      281\n",
       "Intel HD Graphics 520      185\n",
       "Intel UHD Graphics 620      68\n",
       "Nvidia GeForce GTX 1050     66\n",
       "Nvidia GeForce GTX 1060     48\n",
       "                          ... \n",
       "Intel HD Graphics 540        1\n",
       "AMD FirePro W6150M           1\n",
       "AMD Radeon R5 M315           1\n",
       "AMD Radeon R7 M360           1\n",
       "AMD FirePro W5130M           1\n",
       "Name: Gpu, Length: 110, dtype: int64"
      ]
     },
     "execution_count": 104,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df['Gpu'].value_counts()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 106,
   "id": "75b44cba",
   "metadata": {},
   "outputs": [],
   "source": [
    "df['Gpu brand'] = df['Gpu'].apply(lambda x:x.split()[0])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 107,
   "id": "4ca7c61a",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Gpu</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu brand</th>\n",
       "      <th>HDD</th>\n",
       "      <th>SSD</th>\n",
       "      <th>Gpu brand</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>Intel Iris Plus Graphics 640</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>128</td>\n",
       "      <td>Intel</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>Intel HD Graphics 6000</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>127.677940</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>Intel HD Graphics 620</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>Intel</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>16</td>\n",
       "      <td>AMD Radeon Pro 455</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>220.534624</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>512</td>\n",
       "      <td>AMD</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>Intel Iris Plus Graphics 650</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>Intel</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName  Ram                           Gpu  OpSys  Weight  \\\n",
       "0   Apple  Ultrabook    8  Intel Iris Plus Graphics 640  macOS    1.37   \n",
       "1   Apple  Ultrabook    8        Intel HD Graphics 6000  macOS    1.34   \n",
       "2      HP   Notebook    8         Intel HD Graphics 620  No OS    1.86   \n",
       "3   Apple  Ultrabook   16            AMD Radeon Pro 455  macOS    1.83   \n",
       "4   Apple  Ultrabook    8  Intel Iris Plus Graphics 650  macOS    1.37   \n",
       "\n",
       "         Price  Touchscreen  Ips         ppi      Cpu brand  HDD  SSD  \\\n",
       "0   71378.6832            0    1  226.983005  Intel Core i5    0  128   \n",
       "1   47895.5232            0    0  127.677940  Intel Core i5    0    0   \n",
       "2   30636.0000            0    0  141.211998  Intel Core i5    0  256   \n",
       "3  135195.3360            0    1  220.534624  Intel Core i7    0  512   \n",
       "4   96095.8080            0    1  226.983005  Intel Core i5    0  256   \n",
       "\n",
       "  Gpu brand  \n",
       "0     Intel  \n",
       "1     Intel  \n",
       "2     Intel  \n",
       "3       AMD  \n",
       "4     Intel  "
      ]
     },
     "execution_count": 107,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 108,
   "id": "558506dd",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "Intel     722\n",
       "Nvidia    400\n",
       "AMD       180\n",
       "ARM         1\n",
       "Name: Gpu brand, dtype: int64"
      ]
     },
     "execution_count": 108,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df['Gpu brand'].value_counts()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 111,
   "id": "39d984fd",
   "metadata": {},
   "outputs": [],
   "source": [
    "df = df[df['Gpu brand'] != 'ARM']"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 112,
   "id": "7bd66b54",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "Intel     722\n",
       "Nvidia    400\n",
       "AMD       180\n",
       "Name: Gpu brand, dtype: int64"
      ]
     },
     "execution_count": 112,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df['Gpu brand'].value_counts()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 115,
   "id": "a102cfaa",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.barplot(x=df['Gpu brand'],y=df['Price'],estimator=np.median)\n",
    "plt.xticks(rotation='vertical')\n",
    "plt.show()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 116,
   "id": "233a8672",
   "metadata": {},
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "C:\\Users\\91842\\anaconda3\\lib\\site-packages\\pandas\\core\\frame.py:4308: SettingWithCopyWarning: \n",
      "A value is trying to be set on a copy of a slice from a DataFrame\n",
      "\n",
      "See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy\n",
      "  return super().drop(\n"
     ]
    }
   ],
   "source": [
    "df.drop(columns=['Gpu'],inplace=True)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 117,
   "id": "995b12b3",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Ram</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu brand</th>\n",
       "      <th>HDD</th>\n",
       "      <th>SSD</th>\n",
       "      <th>Gpu brand</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>128</td>\n",
       "      <td>Intel</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>127.677940</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>Intel</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>16</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>220.534624</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>512</td>\n",
       "      <td>AMD</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>Intel</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName  Ram  OpSys  Weight        Price  Touchscreen  Ips  \\\n",
       "0   Apple  Ultrabook    8  macOS    1.37   71378.6832            0    1   \n",
       "1   Apple  Ultrabook    8  macOS    1.34   47895.5232            0    0   \n",
       "2      HP   Notebook    8  No OS    1.86   30636.0000            0    0   \n",
       "3   Apple  Ultrabook   16  macOS    1.83  135195.3360            0    1   \n",
       "4   Apple  Ultrabook    8  macOS    1.37   96095.8080            0    1   \n",
       "\n",
       "          ppi      Cpu brand  HDD  SSD Gpu brand  \n",
       "0  226.983005  Intel Core i5    0  128     Intel  \n",
       "1  127.677940  Intel Core i5    0    0     Intel  \n",
       "2  141.211998  Intel Core i5    0  256     Intel  \n",
       "3  220.534624  Intel Core i7    0  512       AMD  \n",
       "4  226.983005  Intel Core i5    0  256     Intel  "
      ]
     },
     "execution_count": 117,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 118,
   "id": "87ea542b",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "Windows 10      1072\n",
       "No OS             66\n",
       "Linux             62\n",
       "Windows 7         45\n",
       "Chrome OS         26\n",
       "macOS             13\n",
       "Windows 10 S       8\n",
       "Mac OS X           8\n",
       "Android            2\n",
       "Name: OpSys, dtype: int64"
      ]
     },
     "execution_count": 118,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df['OpSys'].value_counts()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 120,
   "id": "14cbb277",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.barplot(x=df['OpSys'],y=df['Price'])\n",
    "plt.xticks(rotation='vertical')\n",
    "plt.show()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 121,
   "id": "14d789f5",
   "metadata": {},
   "outputs": [],
   "source": [
    "def cat_os(inp):\n",
    "    if inp == 'Windows 10' or inp == 'Windows 7' or inp == 'Windows 10 S':\n",
    "        return 'Windows'\n",
    "    elif inp == 'macOS' or inp == 'Mac OS X':\n",
    "        return 'Mac'\n",
    "    else:\n",
    "        return 'Others/No OS/Linux'"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 122,
   "id": "fc8e7750",
   "metadata": {},
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "<ipython-input-122-38671a3c07bd>:1: SettingWithCopyWarning: \n",
      "A value is trying to be set on a copy of a slice from a DataFrame.\n",
      "Try using .loc[row_indexer,col_indexer] = value instead\n",
      "\n",
      "See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy\n",
      "  df['os'] = df['OpSys'].apply(cat_os)\n"
     ]
    }
   ],
   "source": [
    "df['os'] = df['OpSys'].apply(cat_os)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 123,
   "id": "11c5a038",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Ram</th>\n",
       "      <th>OpSys</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu brand</th>\n",
       "      <th>HDD</th>\n",
       "      <th>SSD</th>\n",
       "      <th>Gpu brand</th>\n",
       "      <th>os</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>128</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>127.677940</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>No OS</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Others/No OS/Linux</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>16</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>220.534624</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>512</td>\n",
       "      <td>AMD</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>macOS</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "  Company   TypeName  Ram  OpSys  Weight        Price  Touchscreen  Ips  \\\n",
       "0   Apple  Ultrabook    8  macOS    1.37   71378.6832            0    1   \n",
       "1   Apple  Ultrabook    8  macOS    1.34   47895.5232            0    0   \n",
       "2      HP   Notebook    8  No OS    1.86   30636.0000            0    0   \n",
       "3   Apple  Ultrabook   16  macOS    1.83  135195.3360            0    1   \n",
       "4   Apple  Ultrabook    8  macOS    1.37   96095.8080            0    1   \n",
       "\n",
       "          ppi      Cpu brand  HDD  SSD Gpu brand                  os  \n",
       "0  226.983005  Intel Core i5    0  128     Intel                 Mac  \n",
       "1  127.677940  Intel Core i5    0    0     Intel                 Mac  \n",
       "2  141.211998  Intel Core i5    0  256     Intel  Others/No OS/Linux  \n",
       "3  220.534624  Intel Core i7    0  512       AMD                 Mac  \n",
       "4  226.983005  Intel Core i5    0  256     Intel                 Mac  "
      ]
     },
     "execution_count": 123,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.head()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 124,
   "id": "a283996d",
   "metadata": {},
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "C:\\Users\\91842\\anaconda3\\lib\\site-packages\\pandas\\core\\frame.py:4308: SettingWithCopyWarning: \n",
      "A value is trying to be set on a copy of a slice from a DataFrame\n",
      "\n",
      "See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy\n",
      "  return super().drop(\n"
     ]
    }
   ],
   "source": [
    "df.drop(columns=['OpSys'],inplace=True)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 125,
   "id": "9b43fbf7",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.barplot(x=df['os'],y=df['Price'])\n",
    "plt.xticks(rotation='vertical')\n",
    "plt.show()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 126,
   "id": "1d2865dd",
   "metadata": {},
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "C:\\Users\\91842\\anaconda3\\lib\\site-packages\\seaborn\\distributions.py:2557: FutureWarning: `distplot` is a deprecated function and will be removed in a future version. Please adapt your code to use either `displot` (a figure-level function with similar flexibility) or `histplot` (an axes-level function for histograms).\n",
      "  warnings.warn(msg, FutureWarning)\n"
     ]
    },
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:xlabel='Weight', ylabel='Density'>"
      ]
     },
     "execution_count": 126,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.distplot(df['Weight'])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 127,
   "id": "5cb512c6",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:xlabel='Weight', ylabel='Price'>"
      ]
     },
     "execution_count": 127,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.scatterplot(x=df['Weight'],y=df['Price'])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 128,
   "id": "993c3e5d",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "Ram            0.742905\n",
       "Weight         0.209867\n",
       "Price          1.000000\n",
       "Touchscreen    0.192917\n",
       "Ips            0.253320\n",
       "ppi            0.475368\n",
       "HDD           -0.096891\n",
       "SSD            0.670660\n",
       "Name: Price, dtype: float64"
      ]
     },
     "execution_count": 128,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df.corr()['Price']"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 130,
   "id": "95f097f3",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:>"
      ]
     },
     "execution_count": 130,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 2 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.heatmap(df.corr())"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 133,
   "id": "3aaf8bc8",
   "metadata": {},
   "outputs": [
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "C:\\Users\\91842\\anaconda3\\lib\\site-packages\\seaborn\\distributions.py:2557: FutureWarning: `distplot` is a deprecated function and will be removed in a future version. Please adapt your code to use either `displot` (a figure-level function with similar flexibility) or `histplot` (an axes-level function for histograms).\n",
      "  warnings.warn(msg, FutureWarning)\n"
     ]
    },
    {
     "data": {
      "text/plain": [
       "<AxesSubplot:xlabel='Price', ylabel='Density'>"
      ]
     },
     "execution_count": 133,
     "metadata": {},
     "output_type": "execute_result"
    },
    {
     "data": {
      "image/png": "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\n",
      "text/plain": [
       "<Figure size 432x288 with 1 Axes>"
      ]
     },
     "metadata": {
      "needs_background": "light"
     },
     "output_type": "display_data"
    }
   ],
   "source": [
    "sns.distplot(np.log(df['Price']))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 134,
   "id": "8f1293c0",
   "metadata": {},
   "outputs": [],
   "source": [
    "X = df.drop(columns=['Price'])\n",
    "y = np.log(df['Price'])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 135,
   "id": "8f7fb4b3",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu brand</th>\n",
       "      <th>HDD</th>\n",
       "      <th>SSD</th>\n",
       "      <th>Gpu brand</th>\n",
       "      <th>os</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>1.37</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>128</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>1.34</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>127.677940</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>1.86</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Others/No OS/Linux</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>16</td>\n",
       "      <td>1.83</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>220.534624</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>512</td>\n",
       "      <td>AMD</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>1.37</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>...</th>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1298</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>2 in 1 Convertible</td>\n",
       "      <td>4</td>\n",
       "      <td>1.80</td>\n",
       "      <td>1</td>\n",
       "      <td>1</td>\n",
       "      <td>157.350512</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>128</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1299</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>2 in 1 Convertible</td>\n",
       "      <td>16</td>\n",
       "      <td>1.30</td>\n",
       "      <td>1</td>\n",
       "      <td>1</td>\n",
       "      <td>276.053530</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>512</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1300</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>2</td>\n",
       "      <td>1.50</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>111.935204</td>\n",
       "      <td>Other Intel Processor</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1301</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>6</td>\n",
       "      <td>2.19</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>1000</td>\n",
       "      <td>0</td>\n",
       "      <td>AMD</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1302</th>\n",
       "      <td>Asus</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>4</td>\n",
       "      <td>2.20</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>Other Intel Processor</td>\n",
       "      <td>500</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "<p>1302 rows × 12 columns</p>\n",
       "</div>"
      ],
      "text/plain": [
       "     Company            TypeName  Ram  Weight  Touchscreen  Ips         ppi  \\\n",
       "0      Apple           Ultrabook    8    1.37            0    1  226.983005   \n",
       "1      Apple           Ultrabook    8    1.34            0    0  127.677940   \n",
       "2         HP            Notebook    8    1.86            0    0  141.211998   \n",
       "3      Apple           Ultrabook   16    1.83            0    1  220.534624   \n",
       "4      Apple           Ultrabook    8    1.37            0    1  226.983005   \n",
       "...      ...                 ...  ...     ...          ...  ...         ...   \n",
       "1298  Lenovo  2 in 1 Convertible    4    1.80            1    1  157.350512   \n",
       "1299  Lenovo  2 in 1 Convertible   16    1.30            1    1  276.053530   \n",
       "1300  Lenovo            Notebook    2    1.50            0    0  111.935204   \n",
       "1301      HP            Notebook    6    2.19            0    0  100.454670   \n",
       "1302    Asus            Notebook    4    2.20            0    0  100.454670   \n",
       "\n",
       "                  Cpu brand   HDD  SSD Gpu brand                  os  \n",
       "0             Intel Core i5     0  128     Intel                 Mac  \n",
       "1             Intel Core i5     0    0     Intel                 Mac  \n",
       "2             Intel Core i5     0  256     Intel  Others/No OS/Linux  \n",
       "3             Intel Core i7     0  512       AMD                 Mac  \n",
       "4             Intel Core i5     0  256     Intel                 Mac  \n",
       "...                     ...   ...  ...       ...                 ...  \n",
       "1298          Intel Core i7     0  128     Intel             Windows  \n",
       "1299          Intel Core i7     0  512     Intel             Windows  \n",
       "1300  Other Intel Processor     0    0     Intel             Windows  \n",
       "1301          Intel Core i7  1000    0       AMD             Windows  \n",
       "1302  Other Intel Processor   500    0     Intel             Windows  \n",
       "\n",
       "[1302 rows x 12 columns]"
      ]
     },
     "execution_count": 135,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "X"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 136,
   "id": "9f66cd48",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "0       11.175755\n",
       "1       10.776777\n",
       "2       10.329931\n",
       "3       11.814476\n",
       "4       11.473101\n",
       "          ...    \n",
       "1298    10.433899\n",
       "1299    11.288115\n",
       "1300     9.409283\n",
       "1301    10.614129\n",
       "1302     9.886358\n",
       "Name: Price, Length: 1302, dtype: float64"
      ]
     },
     "execution_count": 136,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "y"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 137,
   "id": "60a0aaf0",
   "metadata": {},
   "outputs": [],
   "source": [
    "from sklearn.model_selection import train_test_split\n",
    "X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.15,random_state=2)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 138,
   "id": "3e665d44",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu brand</th>\n",
       "      <th>HDD</th>\n",
       "      <th>SSD</th>\n",
       "      <th>Gpu brand</th>\n",
       "      <th>os</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>183</th>\n",
       "      <td>Toshiba</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>2.00</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>128</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1141</th>\n",
       "      <td>MSI</td>\n",
       "      <td>Gaming</td>\n",
       "      <td>8</td>\n",
       "      <td>2.40</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>1000</td>\n",
       "      <td>128</td>\n",
       "      <td>Nvidia</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1049</th>\n",
       "      <td>Asus</td>\n",
       "      <td>Netbook</td>\n",
       "      <td>4</td>\n",
       "      <td>1.20</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>135.094211</td>\n",
       "      <td>Other Intel Processor</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Others/No OS/Linux</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1020</th>\n",
       "      <td>Dell</td>\n",
       "      <td>2 in 1 Convertible</td>\n",
       "      <td>4</td>\n",
       "      <td>2.08</td>\n",
       "      <td>1</td>\n",
       "      <td>1</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i3</td>\n",
       "      <td>1000</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>878</th>\n",
       "      <td>Dell</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>4</td>\n",
       "      <td>2.18</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>1000</td>\n",
       "      <td>128</td>\n",
       "      <td>Nvidia</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>...</th>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>466</th>\n",
       "      <td>Acer</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>4</td>\n",
       "      <td>2.20</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>Intel Core i3</td>\n",
       "      <td>500</td>\n",
       "      <td>0</td>\n",
       "      <td>Nvidia</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>299</th>\n",
       "      <td>Asus</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>16</td>\n",
       "      <td>1.63</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>512</td>\n",
       "      <td>Nvidia</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>493</th>\n",
       "      <td>Acer</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>2.20</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>AMD Processor</td>\n",
       "      <td>1000</td>\n",
       "      <td>0</td>\n",
       "      <td>AMD</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>527</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>2.20</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>Intel Core i3</td>\n",
       "      <td>2000</td>\n",
       "      <td>0</td>\n",
       "      <td>Nvidia</td>\n",
       "      <td>Others/No OS/Linux</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1193</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>0.92</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.415547</td>\n",
       "      <td>Other Intel Processor</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "<p>1106 rows × 12 columns</p>\n",
       "</div>"
      ],
      "text/plain": [
       "      Company            TypeName  Ram  Weight  Touchscreen  Ips         ppi  \\\n",
       "183   Toshiba            Notebook    8    2.00            0    0  100.454670   \n",
       "1141      MSI              Gaming    8    2.40            0    0  141.211998   \n",
       "1049     Asus             Netbook    4    1.20            0    0  135.094211   \n",
       "1020     Dell  2 in 1 Convertible    4    2.08            1    1  141.211998   \n",
       "878      Dell            Notebook    4    2.18            0    0  141.211998   \n",
       "...       ...                 ...  ...     ...          ...  ...         ...   \n",
       "466      Acer            Notebook    4    2.20            0    0  100.454670   \n",
       "299      Asus           Ultrabook   16    1.63            0    0  141.211998   \n",
       "493      Acer            Notebook    8    2.20            0    0  100.454670   \n",
       "527    Lenovo            Notebook    8    2.20            0    0  100.454670   \n",
       "1193    Apple           Ultrabook    8    0.92            0    1  226.415547   \n",
       "\n",
       "                  Cpu brand   HDD  SSD Gpu brand                  os  \n",
       "183           Intel Core i5     0  128     Intel             Windows  \n",
       "1141          Intel Core i7  1000  128    Nvidia             Windows  \n",
       "1049  Other Intel Processor     0    0     Intel  Others/No OS/Linux  \n",
       "1020          Intel Core i3  1000    0     Intel             Windows  \n",
       "878           Intel Core i5  1000  128    Nvidia             Windows  \n",
       "...                     ...   ...  ...       ...                 ...  \n",
       "466           Intel Core i3   500    0    Nvidia             Windows  \n",
       "299           Intel Core i7     0  512    Nvidia             Windows  \n",
       "493           AMD Processor  1000    0       AMD             Windows  \n",
       "527           Intel Core i3  2000    0    Nvidia  Others/No OS/Linux  \n",
       "1193  Other Intel Processor     0    0     Intel                 Mac  \n",
       "\n",
       "[1106 rows x 12 columns]"
      ]
     },
     "execution_count": 138,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "X_train"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 144,
   "id": "87288c45",
   "metadata": {},
   "outputs": [],
   "source": [
    "from sklearn.compose import ColumnTransformer\n",
    "from sklearn.pipeline import Pipeline\n",
    "from sklearn.preprocessing import OneHotEncoder\n",
    "from sklearn.metrics import r2_score,mean_absolute_error"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 141,
   "id": "e83816b2",
   "metadata": {},
   "outputs": [],
   "source": [
    "from sklearn.linear_model import LinearRegression,Ridge,Lasso\n",
    "from sklearn.neighbors import KNeighborsRegressor\n",
    "from sklearn.tree import DecisionTreeRegressor\n",
    "from sklearn.ensemble import RandomForestRegressor,GradientBoostingRegressor,AdaBoostRegressor,ExtraTreesRegressor\n",
    "from sklearn.svm import SVR\n",
    "from xgboost import XGBRegressor"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "a9b9b064",
   "metadata": {},
   "source": [
    "### Linear regression"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 145,
   "id": "62d1c597",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.8073277448418521\n",
      "MAE 0.21017827976429174\n"
     ]
    }
   ],
   "source": [
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "step2 = LinearRegression()\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "a2792084",
   "metadata": {},
   "source": [
    "### Ridge Regression"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 158,
   "id": "b0636174",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.8127331031311811\n",
      "MAE 0.20926802242582954\n"
     ]
    }
   ],
   "source": [
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "step2 = Ridge(alpha=10)\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "f962da33",
   "metadata": {},
   "source": [
    "### Lasso Regression"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 171,
   "id": "7569a253",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.8071853945317105\n",
      "MAE 0.21114361613472565\n"
     ]
    }
   ],
   "source": [
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "step2 = Lasso(alpha=0.001)\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "ecd73f96",
   "metadata": {},
   "source": [
    "### KNN"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 180,
   "id": "387fb985",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.8021984604448553\n",
      "MAE 0.19319716721521116\n"
     ]
    }
   ],
   "source": [
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "step2 = KNeighborsRegressor(n_neighbors=3)\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "5401e577",
   "metadata": {},
   "source": [
    "### Decision Tree"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 191,
   "id": "767f57d9",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.8466456692979233\n",
      "MAE 0.1806340977609143\n"
     ]
    }
   ],
   "source": [
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "step2 = DecisionTreeRegressor(max_depth=8)\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "68197776",
   "metadata": {},
   "source": [
    "### SVM"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 213,
   "id": "da16c784",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.8083180902257614\n",
      "MAE 0.20239059427481307\n"
     ]
    }
   ],
   "source": [
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "step2 = SVR(kernel='rbf',C=10000,epsilon=0.1)\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "896ba19b",
   "metadata": {},
   "source": [
    "### Random Forest"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 306,
   "id": "18175591",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.8873402378382488\n",
      "MAE 0.15860130110457718\n"
     ]
    }
   ],
   "source": [
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "step2 = RandomForestRegressor(n_estimators=100,\n",
    "                              random_state=3,\n",
    "                              max_samples=0.5,\n",
    "                              max_features=0.75,\n",
    "                              max_depth=15)\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "c5a515a1",
   "metadata": {},
   "source": [
    "### ExtraTrees"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 228,
   "id": "e392786d",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.8753793123440623\n",
      "MAE 0.15979519126758127\n"
     ]
    }
   ],
   "source": [
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "step2 = ExtraTreesRegressor(n_estimators=100,\n",
    "                              random_state=3,\n",
    "                              max_samples=0.5,\n",
    "                              max_features=0.75,\n",
    "                              max_depth=15)\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "f0e21fc7",
   "metadata": {},
   "source": [
    "### AdaBoost"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 244,
   "id": "ec362923",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.7929652659237908\n",
      "MAE 0.23296532406396742\n"
     ]
    }
   ],
   "source": [
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "step2 = AdaBoostRegressor(n_estimators=15,learning_rate=1.0)\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "5803b293",
   "metadata": {},
   "source": [
    "### Gradient Boost"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 260,
   "id": "c1c75c73",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.8823244736036472\n",
      "MAE 0.15929506744611283\n"
     ]
    }
   ],
   "source": [
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "step2 = GradientBoostingRegressor(n_estimators=500)\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "90e671f3",
   "metadata": {},
   "source": [
    "### XgBoost"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 287,
   "id": "a957c398",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.8811773435850243\n",
      "MAE 0.16496203512600974\n"
     ]
    }
   ],
   "source": [
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "step2 = XGBRegressor(n_estimators=45,max_depth=5,learning_rate=0.5)\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "7814b634",
   "metadata": {},
   "source": [
    "### Voting Regressor"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 305,
   "id": "e69ed5dc",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.8901036732986811\n",
      "MAE 0.15847265699907628\n"
     ]
    }
   ],
   "source": [
    "from sklearn.ensemble import VotingRegressor,StackingRegressor\n",
    "\n",
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "\n",
    "rf = RandomForestRegressor(n_estimators=350,random_state=3,max_samples=0.5,max_features=0.75,max_depth=15)\n",
    "gbdt = GradientBoostingRegressor(n_estimators=100,max_features=0.5)\n",
    "xgb = XGBRegressor(n_estimators=25,learning_rate=0.3,max_depth=5)\n",
    "et = ExtraTreesRegressor(n_estimators=100,random_state=3,max_samples=0.5,max_features=0.75,max_depth=10)\n",
    "\n",
    "step2 = VotingRegressor([('rf', rf), ('gbdt', gbdt), ('xgb',xgb), ('et',et)],weights=[5,1,1,1])\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "27e01d9f",
   "metadata": {},
   "source": [
    "### Stacking"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 296,
   "id": "6a5f1f62",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "R2 score 0.8816958647512341\n",
      "MAE 0.1663048975120589\n"
     ]
    }
   ],
   "source": [
    "from sklearn.ensemble import VotingRegressor,StackingRegressor\n",
    "\n",
    "step1 = ColumnTransformer(transformers=[\n",
    "    ('col_tnf',OneHotEncoder(sparse=False,drop='first'),[0,1,7,10,11])\n",
    "],remainder='passthrough')\n",
    "\n",
    "\n",
    "estimators = [\n",
    "    ('rf', RandomForestRegressor(n_estimators=350,random_state=3,max_samples=0.5,max_features=0.75,max_depth=15)),\n",
    "    ('gbdt',GradientBoostingRegressor(n_estimators=100,max_features=0.5)),\n",
    "    ('xgb', XGBRegressor(n_estimators=25,learning_rate=0.3,max_depth=5))\n",
    "]\n",
    "\n",
    "step2 = StackingRegressor(estimators=estimators, final_estimator=Ridge(alpha=100))\n",
    "\n",
    "pipe = Pipeline([\n",
    "    ('step1',step1),\n",
    "    ('step2',step2)\n",
    "])\n",
    "\n",
    "pipe.fit(X_train,y_train)\n",
    "\n",
    "y_pred = pipe.predict(X_test)\n",
    "\n",
    "print('R2 score',r2_score(y_test,y_pred))\n",
    "print('MAE',mean_absolute_error(y_test,y_pred))"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "d4e6d7be",
   "metadata": {},
   "source": [
    "### Exporting the Model"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 308,
   "id": "d35eb7b6",
   "metadata": {},
   "outputs": [],
   "source": [
    "import pickle\n",
    "\n",
    "pickle.dump(df,open('df.pkl','wb'))\n",
    "pickle.dump(pipe,open('pipe.pkl','wb'))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 307,
   "id": "2bd94cb7",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Price</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu brand</th>\n",
       "      <th>HDD</th>\n",
       "      <th>SSD</th>\n",
       "      <th>Gpu brand</th>\n",
       "      <th>os</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>1.37</td>\n",
       "      <td>71378.6832</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>128</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>1.34</td>\n",
       "      <td>47895.5232</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>127.677940</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>1.86</td>\n",
       "      <td>30636.0000</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Others/No OS/Linux</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>16</td>\n",
       "      <td>1.83</td>\n",
       "      <td>135195.3360</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>220.534624</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>512</td>\n",
       "      <td>AMD</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>1.37</td>\n",
       "      <td>96095.8080</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.983005</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>256</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>...</th>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1298</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>2 in 1 Convertible</td>\n",
       "      <td>4</td>\n",
       "      <td>1.80</td>\n",
       "      <td>33992.6400</td>\n",
       "      <td>1</td>\n",
       "      <td>1</td>\n",
       "      <td>157.350512</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>128</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1299</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>2 in 1 Convertible</td>\n",
       "      <td>16</td>\n",
       "      <td>1.30</td>\n",
       "      <td>79866.7200</td>\n",
       "      <td>1</td>\n",
       "      <td>1</td>\n",
       "      <td>276.053530</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>512</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1300</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>2</td>\n",
       "      <td>1.50</td>\n",
       "      <td>12201.1200</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>111.935204</td>\n",
       "      <td>Other Intel Processor</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1301</th>\n",
       "      <td>HP</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>6</td>\n",
       "      <td>2.19</td>\n",
       "      <td>40705.9200</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>1000</td>\n",
       "      <td>0</td>\n",
       "      <td>AMD</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1302</th>\n",
       "      <td>Asus</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>4</td>\n",
       "      <td>2.20</td>\n",
       "      <td>19660.3200</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>Other Intel Processor</td>\n",
       "      <td>500</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "<p>1302 rows × 13 columns</p>\n",
       "</div>"
      ],
      "text/plain": [
       "     Company            TypeName  Ram  Weight        Price  Touchscreen  Ips  \\\n",
       "0      Apple           Ultrabook    8    1.37   71378.6832            0    1   \n",
       "1      Apple           Ultrabook    8    1.34   47895.5232            0    0   \n",
       "2         HP            Notebook    8    1.86   30636.0000            0    0   \n",
       "3      Apple           Ultrabook   16    1.83  135195.3360            0    1   \n",
       "4      Apple           Ultrabook    8    1.37   96095.8080            0    1   \n",
       "...      ...                 ...  ...     ...          ...          ...  ...   \n",
       "1298  Lenovo  2 in 1 Convertible    4    1.80   33992.6400            1    1   \n",
       "1299  Lenovo  2 in 1 Convertible   16    1.30   79866.7200            1    1   \n",
       "1300  Lenovo            Notebook    2    1.50   12201.1200            0    0   \n",
       "1301      HP            Notebook    6    2.19   40705.9200            0    0   \n",
       "1302    Asus            Notebook    4    2.20   19660.3200            0    0   \n",
       "\n",
       "             ppi              Cpu brand   HDD  SSD Gpu brand  \\\n",
       "0     226.983005          Intel Core i5     0  128     Intel   \n",
       "1     127.677940          Intel Core i5     0    0     Intel   \n",
       "2     141.211998          Intel Core i5     0  256     Intel   \n",
       "3     220.534624          Intel Core i7     0  512       AMD   \n",
       "4     226.983005          Intel Core i5     0  256     Intel   \n",
       "...          ...                    ...   ...  ...       ...   \n",
       "1298  157.350512          Intel Core i7     0  128     Intel   \n",
       "1299  276.053530          Intel Core i7     0  512     Intel   \n",
       "1300  111.935204  Other Intel Processor     0    0     Intel   \n",
       "1301  100.454670          Intel Core i7  1000    0       AMD   \n",
       "1302  100.454670  Other Intel Processor   500    0     Intel   \n",
       "\n",
       "                      os  \n",
       "0                    Mac  \n",
       "1                    Mac  \n",
       "2     Others/No OS/Linux  \n",
       "3                    Mac  \n",
       "4                    Mac  \n",
       "...                  ...  \n",
       "1298             Windows  \n",
       "1299             Windows  \n",
       "1300             Windows  \n",
       "1301             Windows  \n",
       "1302             Windows  \n",
       "\n",
       "[1302 rows x 13 columns]"
      ]
     },
     "execution_count": 307,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "df"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 309,
   "id": "64618e65",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Company</th>\n",
       "      <th>TypeName</th>\n",
       "      <th>Ram</th>\n",
       "      <th>Weight</th>\n",
       "      <th>Touchscreen</th>\n",
       "      <th>Ips</th>\n",
       "      <th>ppi</th>\n",
       "      <th>Cpu brand</th>\n",
       "      <th>HDD</th>\n",
       "      <th>SSD</th>\n",
       "      <th>Gpu brand</th>\n",
       "      <th>os</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>183</th>\n",
       "      <td>Toshiba</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>2.00</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>0</td>\n",
       "      <td>128</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1141</th>\n",
       "      <td>MSI</td>\n",
       "      <td>Gaming</td>\n",
       "      <td>8</td>\n",
       "      <td>2.40</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>1000</td>\n",
       "      <td>128</td>\n",
       "      <td>Nvidia</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1049</th>\n",
       "      <td>Asus</td>\n",
       "      <td>Netbook</td>\n",
       "      <td>4</td>\n",
       "      <td>1.20</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>135.094211</td>\n",
       "      <td>Other Intel Processor</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Others/No OS/Linux</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1020</th>\n",
       "      <td>Dell</td>\n",
       "      <td>2 in 1 Convertible</td>\n",
       "      <td>4</td>\n",
       "      <td>2.08</td>\n",
       "      <td>1</td>\n",
       "      <td>1</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i3</td>\n",
       "      <td>1000</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>878</th>\n",
       "      <td>Dell</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>4</td>\n",
       "      <td>2.18</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i5</td>\n",
       "      <td>1000</td>\n",
       "      <td>128</td>\n",
       "      <td>Nvidia</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>...</th>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "      <td>...</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>466</th>\n",
       "      <td>Acer</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>4</td>\n",
       "      <td>2.20</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>Intel Core i3</td>\n",
       "      <td>500</td>\n",
       "      <td>0</td>\n",
       "      <td>Nvidia</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>299</th>\n",
       "      <td>Asus</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>16</td>\n",
       "      <td>1.63</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>141.211998</td>\n",
       "      <td>Intel Core i7</td>\n",
       "      <td>0</td>\n",
       "      <td>512</td>\n",
       "      <td>Nvidia</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>493</th>\n",
       "      <td>Acer</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>2.20</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>AMD Processor</td>\n",
       "      <td>1000</td>\n",
       "      <td>0</td>\n",
       "      <td>AMD</td>\n",
       "      <td>Windows</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>527</th>\n",
       "      <td>Lenovo</td>\n",
       "      <td>Notebook</td>\n",
       "      <td>8</td>\n",
       "      <td>2.20</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>100.454670</td>\n",
       "      <td>Intel Core i3</td>\n",
       "      <td>2000</td>\n",
       "      <td>0</td>\n",
       "      <td>Nvidia</td>\n",
       "      <td>Others/No OS/Linux</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1193</th>\n",
       "      <td>Apple</td>\n",
       "      <td>Ultrabook</td>\n",
       "      <td>8</td>\n",
       "      <td>0.92</td>\n",
       "      <td>0</td>\n",
       "      <td>1</td>\n",
       "      <td>226.415547</td>\n",
       "      <td>Other Intel Processor</td>\n",
       "      <td>0</td>\n",
       "      <td>0</td>\n",
       "      <td>Intel</td>\n",
       "      <td>Mac</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "<p>1106 rows × 12 columns</p>\n",
       "</div>"
      ],
      "text/plain": [
       "      Company            TypeName  Ram  Weight  Touchscreen  Ips         ppi  \\\n",
       "183   Toshiba            Notebook    8    2.00            0    0  100.454670   \n",
       "1141      MSI              Gaming    8    2.40            0    0  141.211998   \n",
       "1049     Asus             Netbook    4    1.20            0    0  135.094211   \n",
       "1020     Dell  2 in 1 Convertible    4    2.08            1    1  141.211998   \n",
       "878      Dell            Notebook    4    2.18            0    0  141.211998   \n",
       "...       ...                 ...  ...     ...          ...  ...         ...   \n",
       "466      Acer            Notebook    4    2.20            0    0  100.454670   \n",
       "299      Asus           Ultrabook   16    1.63            0    0  141.211998   \n",
       "493      Acer            Notebook    8    2.20            0    0  100.454670   \n",
       "527    Lenovo            Notebook    8    2.20            0    0  100.454670   \n",
       "1193    Apple           Ultrabook    8    0.92            0    1  226.415547   \n",
       "\n",
       "                  Cpu brand   HDD  SSD Gpu brand                  os  \n",
       "183           Intel Core i5     0  128     Intel             Windows  \n",
       "1141          Intel Core i7  1000  128    Nvidia             Windows  \n",
       "1049  Other Intel Processor     0    0     Intel  Others/No OS/Linux  \n",
       "1020          Intel Core i3  1000    0     Intel             Windows  \n",
       "878           Intel Core i5  1000  128    Nvidia             Windows  \n",
       "...                     ...   ...  ...       ...                 ...  \n",
       "466           Intel Core i3   500    0    Nvidia             Windows  \n",
       "299           Intel Core i7     0  512    Nvidia             Windows  \n",
       "493           AMD Processor  1000    0       AMD             Windows  \n",
       "527           Intel Core i3  2000    0    Nvidia  Others/No OS/Linux  \n",
       "1193  Other Intel Processor     0    0     Intel                 Mac  \n",
       "\n",
       "[1106 rows x 12 columns]"
      ]
     },
     "execution_count": 309,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "X_train"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "55367c9e",
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.8.8"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
